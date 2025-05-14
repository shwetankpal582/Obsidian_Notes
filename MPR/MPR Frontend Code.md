**Frontend Code**

1. app.js
```
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/Register'
import Dashboard from './pages/Dashboard';
import SnippetView from './pages/Snippet';
import AlertBox from './components/AlertBox'
function App() {
  return (

    <>

      <AuthProvider>

        <BrowserRouter>

          <Routes>

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route path="/" element={<Dashboard />} />

            <Route path="/snippet/:id" element={<SnippetView />} />

          </Routes>

        </BrowserRouter>

        <AlertBox />

      </AuthProvider>

    </>
  )
}
export default App
```

2. AuthContext.jsx
```
import React, { createContext, useState, useContext, useCallback } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token') || null);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const [alertBox, setAlertBox] = useState({ show: false, message: '', type: 'success' });

    const updateAlertBox = (message, type) => {

       setAlertBox({ show: true, message: message, type: type });

        setTimeout(() => {

            setAlertBox({ show: false, message: '', type: 'success' });

        }, 4000);

    }

    const login = useCallback((newToken, userData) => {

        setToken(newToken);

        setUser(userData);

        localStorage.setItem('token', newToken);

        localStorage.setItem('user', JSON.stringify(userData));

    }, []);

    const logout = useCallback(() => {

        setToken(null);

        setUser(null);

        localStorage.removeItem('token');

        localStorage.removeItem('user');

    }, []);

    const value = {

        token,

        user,

        login,

        logout,

        alertBox,

        updateAlertBox,

        fetchWithToken: useCallback(async (url, options = {}) => {

            const headers = {

                'Content-Type': 'application/json',

            };

            if (token) {

                headers.Authorization = `Bearer ${token}`;

            }

            const response = await fetch(url, { ...options, headers });

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`);

            }

            return await response.json();

        }, [token]),

    };

    return (

        <AuthContext.Provider value={value}>

            {children}

        </AuthContext.Provider>

    );

};

export const useAuth = () => {

    return useContext(AuthContext);

};
```

3. Pages

	3.1 Dashboard.jsx
	
```
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import SnippetForm from '../components/SnippetForm';
import SnippetList from '../components/SnippetList';
import { useNavigate } from 'react-router-dom';
import { backendURL } from '../utils/backendUrl';

function Dashboard() {

    const { token, user, logout, fetchWithToken, updateAlertBox } = useAuth();

    const navigate = useNavigate();

    const [snippets, setSnippets] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [editingSnippetId, setEditingSnippetId] = useState(null);

    const [updateSnippetData, setUpdateSnippetData] = useState(null);

    useEffect(() => {

        if (!token) {

            navigate("/login");

        }

    }, [token, navigate]);

    useEffect(() => {

        const fetchSnippets = async () => {

            try {

                let url = `${backendURL}/snippets`;

                if (user?.role === 'reviewer') {

                    url = `${backendURL}/snippets/review/assigned`;

                }

                const data = await fetchWithToken(url);

                setSnippets(data);

            } catch (error) {

                updateAlertBox('Error fetching snippets', 'error');

                navigate("/login")

                console.log(error);

            }

        };

        if (token) {

            fetchSnippets();

        }

    }, [token, fetchWithToken]);

  

    const handleLogout = () => {

        logout();

        navigate('/login');

        updateAlertBox('Logout successful', 'success');

    };

    const handleCreateSnippet = async (formData) => {

        try {

            const response = await fetch(`${backendURL}/snippets`, {

                method: 'POST',

                headers: {

                    'Content-Type': 'application/json',

                    Authorization: `Bearer ${token}`,

                },

                body: JSON.stringify(formData),

            });

            if (response.ok) {

                setShowForm(false);

                setEditingSnippetId(null);

                setUpdateSnippetData(null);

                const data = await response.json();

                setSnippets(prevSnippets => [...prevSnippets, data])

                updateAlertBox('Snippet created successfull', 'success');

            } else {

                updateAlertBox('Error creating snippet', 'error');

  

            }

        } catch (error) {

            updateAlertBox('Error creating snippet', 'error');

            console.log(error);

        }

    };

  

    const handleDeleteSnippet = async (snippetId) => {

        try {

            const response = await fetch(`${backendURL}/snippets/${snippetId}`, {

                method: 'DELETE',

                headers: {

                    Authorization: `Bearer ${token}`,

                }

            });

            if (response.ok) {

                setSnippets(prevSnippets => prevSnippets.filter(s => s._id !== snippetId));

                updateAlertBox('Snippet deleted successfull', 'success');

            } else {

                updateAlertBox('Error deleting snippet', 'error');

  

            }

        } catch (error) {

            updateAlertBox('Error deleting snippet', 'error');

            console.log(error);

        }

    };

  

    const handleEditSnippet = async (snippetId) => {

        setShowForm(true);

        setEditingSnippetId(snippetId);

        try {

            const response = await fetch(`${backendURL}/snippets/${snippetId}`, {

                headers: {

                    Authorization: `Bearer ${token}`,

                }

            });

            if (response.ok) {

                const data = await response.json();

                setUpdateSnippetData(data);

            }

        } catch (error) {

            updateAlertBox('Error fetching snippet for editing', 'error');

            console.error('Error fetching snippet for editing:', error);

        }

    };

    const handleUpdateSnippet = async (formData) => {

        try {

            const response = await fetch(`${backendURL}/snippets/${editingSnippetId}`, {

                method: 'PUT',

                headers: {

                    'Content-Type': 'application/json',

                    Authorization: `Bearer ${token}`,

                },

                body: JSON.stringify(formData)

            });

            if (response.ok) {

                setShowForm(false);

                setEditingSnippetId(null);

                setUpdateSnippetData(null);

                const updatedSnippet = await response.json();

                setSnippets(prevSnippets =>

                    prevSnippets.map(snippet =>

                        snippet._id === updatedSnippet._id ? updatedSnippet : snippet

                    )

                );

                updateAlertBox('Snippet updated successfull', 'success');

            } else {

                updateAlertBox('Error updating snippet', 'error');

  

            }

        } catch (error) {

            updateAlertBox('Error updating snippet', 'error');

            console.log(error)

        }

    };

    const handleFormSubmit = async (formData) => {

        if (editingSnippetId) {

            await handleUpdateSnippet(formData);

        } else {

            await handleCreateSnippet(formData);

        }

    };

  

    const handleAssignReviewers = async (snippetId, reviewerId) => {

        try {

            const response = await fetch(`${backendURL}/snippets/${snippetId}/assign-reviewers`, {

                method: 'PUT',

                headers: {

                    'Content-Type': 'application/json',

                    Authorization: `Bearer ${token}`,

                },

                body: JSON.stringify({ reviewers: [reviewerId] }),

            });

            if (response.ok) {

                const updatedSnippet = await response.json();

                setSnippets(prevSnippets =>

                    prevSnippets.map(snippet =>

                        snippet._id === updatedSnippet._id ? updatedSnippet : snippet

                    )

                );

                updateAlertBox('Reviewer assigned', 'success');

  

            }

        } catch (error) {

            updateAlertBox('Error assigning reviewers', 'error');

            console.error('Error assigning reviewers: ', error);

        }

    };

    const handleMarkReviewed = async (snippetId) => {

        try {

            const response = await fetch(`${backendURL}/snippets/${snippetId}/mark-reviewed`, {

                method: 'PUT',

                headers: {

                    Authorization: `Bearer ${token}`,

                },

            });

            if (response.ok) {

                const updatedSnippet = await response.json();

                setSnippets(prevSnippets =>

                    prevSnippets.map(snippet =>

                        snippet._id === updatedSnippet._id ? updatedSnippet : snippet

                    )

                );

                updateAlertBox('Snippet marked as reviewed', 'success');

            }

        } catch (error) {

            updateAlertBox('Error marking as reviewed', 'error');

            console.error("Error marking as reviewed", error);

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 p-4 ">

            <div className="mb-4 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-gray-800">

                    CodeDevForge

                </h1>

                <div className="space-x-2">

                    {user?.role === 'developer' && (

                        <button

                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"

                            onClick={() => setShowForm(!showForm)}

                        >

                            {showForm ? "Hide Form" : "Add Snippet"}

                        </button>

                    )}

                    <button

                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"

                        onClick={handleLogout}

                    >

                        Logout

                    </button>

                </div>

            </div>

            {showForm && (

                <SnippetForm

                    onSubmit={handleFormSubmit}

                    initialData={updateSnippetData}

                />

            )}

            <SnippetList

                snippets={snippets}

                onDelete={user?.role === 'developer' ? handleDeleteSnippet : null}

                onEdit={user?.role === 'developer' ? handleEditSnippet : null}

                onAssignReviewers={user?.role === 'developer' ? handleAssignReviewers : null}

                onMarkReviewed={user?.role === 'reviewer' ? handleMarkReviewed : null}

            />

        </div>

    );

}

export default Dashboard;
```

  3.2 LoginPage.jsx
```
  import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

import AuthForm from '../components/AuthForm';

import { backendURL } from '../utils/backendUrl';

  

function LoginPage() {

    const { login, updateAlertBox } = useAuth();

    const navigate = useNavigate();

  

    const handleLogin = async (formData) => {

        try {

            const response = await fetch(`${backendURL}/auth/login`, {

                method: 'POST',

                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify(formData),

            });

  

            if (response.ok) {

                const data = await response.json();

                login(data.token, data.user);

                navigate('/');

                updateAlertBox('Login successful', 'success');

  

            } else {

                updateAlertBox('Login failed , please try again', 'error');

            }

        } catch (error) {

            updateAlertBox('Login failed , please try again', 'error');

            console.error('Error during login:', error);

        }

    };

  

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <nav className="fixed top-0 left-0 w-full  text-black z-10 text-xl font-bold p-4">

                <a href="/" >

                    CodeDevForge

                </a>

            </nav>

  

            <AuthForm onSubmit={handleLogin} title="Login" buttonText="Login" />

        </div>

    );

}

  

export default LoginPage; 
```

  3.3 Register.jsx

```
   import React from 'react';

import { useNavigate } from 'react-router-dom';

import AuthForm from '../components/AuthForm';

import { useAuth } from '../context/AuthContext';

import { backendURL } from '../utils/backendUrl';

  

function Register() {

    const navigate = useNavigate();

    const { updateAlertBox } = useAuth();

  

    const handleRegister = async (formData) => {

        try {

            const response = await fetch(`${backendURL}/auth/register`, {

                method: 'POST',

                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify(formData),

            });

  

            if (response.ok) {

                updateAlertBox('User Registered Successfully', 'success');

                navigate('/login');

            } else {

                updateAlertBox('Registration failed, please try again', 'error');

            }

        } catch (error) {

            updateAlertBox('Registration failed, please try again', 'error');

            console.error('Error during registration:', error);

        }

    };

  

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <nav className="fixed top-0 left-0 w-full  text-black z-10 text-xl font-bold p-4">

                <a href="/" >

                    CodeDevForge

                </a>

            </nav>

            <AuthForm onSubmit={handleRegister} isRegistration title="Register" buttonText="Register" />

        </div>

    );

}

export default Register;
```

 3.4  Snippet.jsx
```
import React, { useState, useEffect, useRef } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

import { io } from 'socket.io-client';

import { MessageSquare, Clock, Code2, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

import { saveAs } from 'file-saver';

import LineEditor from '../components/LineEditor';

// import CodeViewer from '../components/CodeViewer';

import { backendURL } from '../utils/backendUrl';

  

function SnippetView() {

    const { id } = useParams();

    const { token, fetchWithToken, user, updateAlertBox } = useAuth();

    const [snippet, setSnippet] = useState(null);

    const [comments, setComments] = useState([]);

    const [code, setCode] = useState('');

    const [newComment, setNewComment] = useState('');

    const [highlightedLines, setHighlightedLines] = useState({});

    const navigate = useNavigate();

    const [changeHistory, setChangeHistory] = useState([]);

    const socket = useRef(null);

    const [isReviewed, setIsReviewed] = useState(false);

  

    const commentsEndRef = useRef(null);

    const [isChangeHistoryOpen, setIsChangeHistoryOpen] = useState(false);

  

    useEffect(() => {

        if (commentsEndRef.current) {

            commentsEndRef.current.scrollTop = commentsEndRef.current.scrollHeight;

        }

    }, [comments.length]);

  

    useEffect(() => {

        const fetchSnippet = async () => {

            try {

                const data = await fetchWithToken(`${backendURL}/snippets/${id}`);

                setSnippet(data);

                setComments(data.commentCount);

                setCode(data.code);

                setIsReviewed(data.status === 'Reviewed');

            } catch (error) {

                updateAlertBox('Error fetching snippet', 'error');

                console.error("Error fetching snippet: ", error);

                navigate('/');

            }

        };

  

        const fetchChangeHistory = async () => {

            try {

                const data = await fetchWithToken(`${backendURL}/change-history/${id}`);

                setChangeHistory(data)

            } catch (error) {

                updateAlertBox('Error fetching change history', 'error');

                console.error("Error fetching change history: ", error);

            }

        };

        fetchSnippet();

        fetchChangeHistory();

    }, [id, fetchWithToken, navigate]);

  
  

    const exportSnippet = () => {

        const snippetContent = `

        Title: ${snippet.title}

        Description: ${snippet.description}

        Language: ${snippet.language}

        Code:

        ${snippet.code}

        Comments:

        ${comments.map(comment => `${comment.author}: ${comment.text} (Line: ${comment.line})`).join('\n')}

    `;

        const blob = new Blob([snippetContent], { type: 'text/plain;charset=utf-8' });

        saveAs(blob, `${snippet.title}.txt`);

        updateAlertBox('File downloaded', 'success');

    };

  
  

    useEffect(() => {

        if (snippet) {

            socket.current = io(`${backendURL}`, {

                auth: {

                    token: token,

                }

            });

  

            socket.current.emit('join-room', snippet._id);

            socket.current.on('new-comment', (commentData) => {

                setComments(prevComments => [...prevComments, commentData]);

                setHighlightedLines(prevHighlightedLines => ({

                    ...prevHighlightedLines,

                    [commentData.line]: true,

                }));

            });

  

            socket.current.on('code-change', (codeChangeData) => {

                setCode(prevCode => {

                    const lines = prevCode.split('\n');

                    lines[codeChangeData.lineNumber - 1] = codeChangeData.lineCode;

                    return lines.join('\n');

                });

            });

            socket.current.on('new-notification', (notification) => {

                updateAlertBox(notification.message, 'success')

            });

            socket.current.on('change-history-update', (changeData) => {

                setChangeHistory(prevChangeHistory => [changeData, ...prevChangeHistory]);

            });

            return () => {

                socket.current.disconnect();

            }

        }

    }, [snippet, token]);

  

    const handleSendComment = async (line) => {

        if (newComment.trim()) {

            const commentData = {

                text: newComment,

                line: line,

                author: user.username,

                snippetId: snippet._id,

                snippetTitle: snippet.title

            }

            socket.current.emit('send-comment', commentData);

            try {

                await fetch(`${backendURL}/comments`, {

                    method: 'POST',

                    headers: {

                        'Content-Type': 'application/json',

                        Authorization: `Bearer ${token}`

                    },

                    body: JSON.stringify(commentData)

                });

                setNewComment('');

                updateAlertBox('Comment added successfully', 'success');

            } catch (error) {

                updateAlertBox('Error sending comment', 'error');

                console.error('Error sending comment:', error)

            }

        }

    };

  

    const handleCodeChange = (newCode, lineNumber, lineCode) => {

        setCode(newCode);

        socket.current.emit('code-change', { lineNumber, lineCode, snippetId: snippet._id, author: user.username });

    };

  
  
  

    const renderCodeLines = () => {

        if (!code) return null;

        const lines = code.split('\n');

        return lines.map((line, index) => (

            <div

                key={index}

                className={`group flex items-center hover:bg-gray-50 transition-colors duration-150 ${highlightedLines[index + 1] ? 'bg-amber-50' : ''

                    }`}

            >

                <div className="flex-none w-12 px-4 py-2 text-gray-400 text-sm select-none  border-gray-200">

                    {index + 1}

                </div>

                <div className="flex-grow px-4 py-2 font-mono text-sm border-l">

                    {line}

                </div>

                <button onClick={() => handleSendComment(index + 1)} className="opacity-0 group-hover:opacity-100 flex-none px-2 py-1 mr-2 text-xs font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-all duration-150">

                    <MessageSquare className="w-4 h-4" />

                </button>

            </div>

        ));

    };

  
  

    const updateSnippet = async () => {

        try {

            const formData = {

                code,

                title: snippet.title,

                description: snippet.description,

                language: snippet.language,

            }

            await fetch(`${backendURL}/snippets/${snippet._id}`, {

                method: 'PUT',

                headers: {

                    'Content-Type': 'application/json',

                    Authorization: `Bearer ${token}`

                },

                body: JSON.stringify(formData)

            });

            updateAlertBox('Snippet updated successfully', 'success');

        } catch (error) {

            updateAlertBox('Failed to update snippet', 'error');

            console.error('Error updating snippet:', error);

        }

    }

  
  

    if (!snippet) {

        return <div>Loading...</div>

    }

    return (

        <div className="min-h-screen bg-gray-50 text-black">

            <div className="max-w-6xl mx-auto px-4 py-12">

                <nav className=" fixed  top-0 left-0 w-full  text-black z-10 text-xl font-bold p-4">

                    <a href="/" >

                        CodeDevForge

                    </a>

                </nav>

                <a href="/" className=" w-full flex text-black z-10 text-sm font-bold py-4 items-center">

  

                    <ArrowLeft />  Back

  

                </a>

                <div className="mb-8">

                    <div className="flex items-center justify-between">

                        <h1 className="text-3xl font-bold text-gray-900">{snippet.title}</h1>

  

                    </div>

                    <p className="mt-2 text-gray-600">{snippet.description}</p>

                    <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">

                        <div className="flex items-center">

                            <Code2 className="w-4 h-4 mr-2" />

                            {snippet.language}

                        </div>

                        <div className="flex items-center">

                            <MessageSquare className="w-4 h-4 mr-2" />

                            {comments.length} Comments

                        </div>

                    </div>

                </div>

  
  

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

  
  

                    <div className="lg:col-span-2">

  

                        <div className="flex items-center justify-between mb-2">

                            <h1 className="text-3xl font-bold text-gray-900"></h1>

                            <div>

                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${snippet.status === 'Pending Review'

                                    ? 'bg-yellow-100 text-yellow-800'

                                    : snippet.status === 'Reviewed'

                                        ? 'bg-green-100 text-green-800'

                                        : 'bg-gray-100 text-gray-800'

                                    }`}>

                                    {snippet.status}

                                </span>

                            </div>

                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">

                            <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">

                                <h2 className="font-semibold text-gray-800">Code</h2>

                            </div>

                            <div className="divide-y divide-gray-200">

                                {renderCodeLines()}

                            </div>

                            {user.role === 'developer' && (<>

  

                                <LineEditor code={code} onChange={handleCodeChange} highlightLines={Object.keys(highlightedLines)} />

  

                                <button

                                    onClick={updateSnippet}

                                    className=" px-4 py-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"

                                >

                                    Update Snippet

                                </button>

                            </>

                            )}

                        </div>

                    </div>

  
  

                    <div className="space-y-6">

  

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">

                            <div className="px-4 py-3 border-b border-gray-200">

                                <h2 className="font-semibold text-gray-800">Comments</h2>

                            </div>

                            <div className="p-4 ">

                                <div ref={commentsEndRef} className="space-y-4 overflow-y-auto max-h-[400px]">

                                    {comments.length > 0 && comments?.map((comment, index) => (

                                        <div key={index} className="bg-gray-50 rounded-lg p-3">

                                            <div className="flex items-center space-x-2 mb-1">

                                                <span className="font-medium text-gray-900">{comment.author}</span>

                                                <span className="text-sm text-gray-500">Line {comment.line}</span>

                                            </div>

                                            <p className="text-gray-700 text-sm">{comment.text}</p>

                                        </div>

                                    ))}

                                </div>

                                {user.role === 'reviewer' && <div className="mt-4 flex items-center space-x-2">

                                    <input

                                        type="text"

                                        placeholder="Add a comment..."

                                        className="flex-grow px-3 py-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

                                        value={newComment}

                                        onChange={(e) => setNewComment(e.target.value)}

                                    />

  

                                </div>}

                            </div>

                        </div>

  
  

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 ">

                            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">

                                <h2 className="font-semibold text-gray-800">Change History</h2>

                                <button

                                    onClick={() => setIsChangeHistoryOpen(!isChangeHistoryOpen)}

                                    className="px-3 py-1 text-sm font-medium text-black rounded">

                                    {isChangeHistoryOpen ? <ChevronUp /> : <ChevronDown />}

                                </button>

                            </div>

                            {isChangeHistoryOpen && <div className="divide-y divide-gray-200 overflow-y-auto max-h-[500px]">

                                {changeHistory?.map((change, index) => (

                                    <div key={index} className="p-4 flex items-start space-x-3">

                                        <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />

                                        <div>

                                            <div className="flex items-center space-x-2">

                                                <span className="font-medium text-gray-900">{change.user}</span>

                                                <span className="text-sm text-gray-500">{change.type}</span>

                                            </div>

                                            <p className="text-sm text-gray-600 mt-1">{change.detail}</p>

                                        </div>

                                    </div>

                                ))}

                            </div>}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default SnippetView;
```