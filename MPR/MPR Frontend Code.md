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
   
```