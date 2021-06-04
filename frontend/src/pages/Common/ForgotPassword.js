import { useState } from 'react';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="forgotpassword">
            <form onSubmit={submitForm} className="nice-form">
                <h3>Password Assistance</h3>
                <hr />
                <div className="forgotp-email">
                    <label>Email</label>
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your registered emailid"
                        type="text" name="email"
                    />
                </div>

                <button type="submit">Submit</button>

                <div className="form-footer">
                    <Link to="/login">Back to Login</Link>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword
