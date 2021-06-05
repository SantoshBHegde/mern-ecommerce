import {useState} from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <div className="register-card">
            <form onSubmit={submitForm} className="nice-form">
                <h3>Create Account</h3>
                <hr />
                <div className="regiser-name">
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="email" />
                </div>
                <div className="regiser-email">
                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" />
                </div>

                <div className="regiser-password">
                    <div className="regiser-labels">
                        <label>Password</label>
                    </div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
                </div>

                <div className="regiser-password">
                    <div className="regiser-labels">
                        <label>Confirm Password</label>
                    </div>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirm-password" />
                </div>

                <button type="submit" className="black-button">Register</button>
                <div className="form-footer">
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;
