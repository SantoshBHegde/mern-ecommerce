import { useState } from 'react';
import {Link} from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <div className="login">
            <form onSubmit={submitForm} className="nice-form">
                <h3>Login</h3>
                <hr />
                <div className="login-email">
                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email"></input>
                </div>

                <div className="login-password">
                    <div className="login-labels">
                        <label>Password</label>
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"></input>
                </div>

                <button type="submit" className="black-button">Sign In</button>
                <div className="form-footer">
                    <p>If you don't have account?</p>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
