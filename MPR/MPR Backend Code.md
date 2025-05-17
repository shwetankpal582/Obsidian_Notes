**Backend Code**

1. Register
```
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../modals/user");

router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    
    try {
        const userExist = await User.findOne({ username });
        if (userExist) {
            return res.status(400).json({ message: "User already exists!" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword, role });
        await user.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: `Error creating user: ${error.message}` });
    }
});
```

2. Login
```
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'Invalid username or password.' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { username: user.username, role: user.role } });
    } catch (error) {
        res.status(500).json({ error: `Error logging in: ${error.message}` });
    }
});
```

3. User
```
router.get('/users', async (req, res) => {
    try {
        const { role } = req.query;
        if (!role) {
            return res.status(400).json({ message: 'Role query parameter is required.' });
        }
        
        const users = await User.find({ role }).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: `Error fetching users: ${error.message}` });
    }
});
module.exports = router;
```

4. Index.js
```
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const { Server } = require('socket.io');

const { createServer } = require('http');

const authRoutes = require('./routes/auth');

const snippetRoutes = require('./routes/snippets');

const commentRoutes = require('./routes/comments');

const changeHistoryRoute = require('./routes/changeHistory');

const ChangeHistory = require('./modals/changeHistory');

const Snippet = require('./modals/snippet');

  
  
  

const app = express();

const httpServer = createServer(app);

const PORT = process.env.PORT || 5000;

const io = new Server(httpServer, {

    cors: {

        origin: '*',

        methods: ['GET', 'POST'],

    },

});

  
  
  

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log('MongoDB Connected!'))

    .catch(err => console.log(err));

  
  

app.use(cors());

app.use(express.json());

app.use('/auth', authRoutes);

app.use('/snippets', snippetRoutes);

app.use('/comments', commentRoutes);

app.use('/change-history', changeHistoryRoute);

  
  

app.get('/', (req, res) => {

    res.send("API is running");

});

  

io.on("connection", (socket) => {

    // console.log(`User connected: ${socket.id}`);

  

    socket.on('join-room', (snippetId) => {

        socket.join(snippetId);

        // console.log(`User ${socket.id} joined room: ${snippetId}`);

    });

  

    socket.on('disconnect', () => {

        // console.log(`User disconnected: ${socket.id}`);

    });

  

    socket.on('send-comment', async (commentData) => {

        io.to(commentData.snippetId).emit('new-comment', commentData);

        try {

            io.to(commentData.snippetId).emit('new-notification', {

                type: 'comment',

                message: `New comment on line ${commentData.line} for your snippet: ${commentData.snippetTitle}`,

            });

        } catch (error) {

            // console.error('Error sending comment notification:', error);

        }

    });

  

    socket.on('code-change', async (codeChangeData) => {

  

        io.to(codeChangeData.snippetId).emit('code-change', codeChangeData);

        try {

            const snippet = await Snippet.findById(codeChangeData.snippetId);

            if (snippet) {

                const lines = snippet.code.split('\n');

                lines[codeChangeData.lineNumber - 1] = codeChangeData.lineCode;

                snippet.code = lines.join('\n');

                await snippet.save();

            }

  

            const changeHistory = new ChangeHistory({

                user: codeChangeData.author,

                type: 'code-change',

                detail: `Code changed on line ${codeChangeData.lineNumber}: ${codeChangeData.lineCode}`,

                snippetId: codeChangeData.snippetId,

            });

            await changeHistory.save();

  

            io.to(codeChangeData.snippetId).emit('change-history-update', {

                user: codeChangeData.author,

                type: 'Code Changed',

                detail: `Code changed on line ${codeChangeData.lineNumber}: ${codeChangeData.lineCode}`,

            });

        } catch (error) {

            console.error('Error saving code change history:', error);

        }

    });

});

  
  

httpServer.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
```

5. changeHistory.js
```
const express = require('express');

const router = express.Router();

const ChangeHistory = require('../modals/changeHistory');

const { protect } = require('../middleware/authMiddleware');

  
  

router.get('/:snippetId', protect(['developer', 'reviewer']), async (req, res) => {

    try {

        const snippetId = req.params.snippetId;

        const history = await ChangeHistory.find({ snippetId }).sort({ timestamp: -1 });

        res.json(history)

    } catch (error) {

        res.status(500).send("Error fetching change history: ${ error }");

    }

});

  

module.exports = router;
```