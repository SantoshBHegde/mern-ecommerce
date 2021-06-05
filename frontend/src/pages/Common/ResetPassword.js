import {useState} from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="resetpassword">
            <form onSubmit={submitForm} className="nice-form">
                <h3>Reset Password</h3>
                <hr />
                <div className="resetp-password">
                    <div className="resetp-labels">
                        <label>Password</label>
                    </div>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"></input>
                </div>

                <div className="resetp-password">
                    <div className="resetp-labels">
                        <label>Confirm Password</label>
                    </div>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirm-password"></input>
                </div>

                <button type="submit" className="black-button">Reset my Password</button>

                <div className="form-footer">
                    <Link to="/login">Back to Login</Link>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword
