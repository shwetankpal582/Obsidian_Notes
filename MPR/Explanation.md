Backend Explanation

The backend of this project is built using Node.js with the Express framework, MongoDB for the database, and Socket.IO for real-time communication. Here's a detailed explanation of its architecture and key components:

1. Main Server Setup (backend/index.js):
- The server uses Express to handle HTTP requests and Mongoose to connect to a MongoDB database.
- Environment variables are managed using dotenv.
- CORS is enabled to allow communication between the frontend and backend.
- The server listens on a configurable port (default 5000).
- Routes are organized into separate modules for authentication, snippets, comments, and change history.
- Socket.IO is used to enable real-time features such as collaborative code editing and live comments. It manages socket connections, rooms for snippets, and broadcasts events like new comments, code changes, and notifications.
- When a code change event is received, the backend updates the snippet in the database and logs the change in a change history collection.

2. Authentication:
- User data is modeled with Mongoose schemas (backend/modals/user.js) including username, hashed password, and role (developer or reviewer).
- Authentication routes (backend/routes/auth.js) provide endpoints for user registration, login, and fetching users by role.
- Passwords are hashed using bcryptjs.
- JWT tokens are issued upon login to authenticate users.
- A middleware (backend/middleware/authMiddleware.js) protects routes by verifying JWT tokens and checking user roles.

3. Data Models:
- The backend uses Mongoose models (in backend/modals/) to represent entities such as users, snippets, comments, and change history.
- These models define the schema and interact with MongoDB to store and retrieve data.

4. Real-time Collaboration:
- Socket.IO enables users to join rooms corresponding to specific code snippets.
- Users can send comments and code changes in real-time.
- The backend broadcasts these events to all users in the room and updates the database accordingly.
- Change history is maintained to track edits made to snippets.

Overall, the backend provides a RESTful API for managing users, code snippets, comments, and change history, while also supporting real-time collaborative editing and commenting through WebSocket connections. This architecture allows for a responsive and interactive user experience in the frontend.
