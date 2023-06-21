import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import { Navbar } from '../Navbar';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isloggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(false);
    let navigate = useNavigate();

    const handleLogin = (e) => {
        setIsLoggedIn(true)
        if (username === 'demo@coralmango.com' && password === 'demo123') {
            setIsLoggedIn(true)
            navigate('/home')
        } else {
            e.preventDefault();
            setError(true);
            setIsLoggedIn(false)
        }
    }

    return (
        <div>
            <Navbar text='Contact' />
            <form className='login-form'>
                <div className='form-group'>
                    <label htmlFor="username">User Name:</label>
                    <input
                        type='text'
                        id='username'
                        value={username}
                        className='form-control'
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter username'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        className='form-control'
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password'
                    />
                </div>
                <button type='submit' className='btn' onClick={handleLogin}>Login</button>
                {error ? <p>Invalid Credentials!</p> : null}
            </form>
        </div>
    )
}

