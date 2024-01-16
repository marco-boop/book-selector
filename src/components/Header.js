// Header.js
import React, { useContext, useState } from 'react';
import SignInForm from './SignInForm';
import SignUp from './SignUp';
import SignOutButton from './SignOut';
import { MyContext } from '../App';
import '../styles/Header.css';

const Header = () => {
    const { state } = useContext(MyContext);
    const uid = state.user?.uid;
    const email = state.user?.email;

    const [showSignUp, setShowSignUp] = useState(false);

    const toggleSignUp = () => {
        setShowSignUp(!showSignUp);
    };

    return (
        <div className="header">
            {uid ? (
                <p>You are signed in: {uid} - {email} <SignOutButton /></p>
            ) : (
                <div>
                    <p><SignInForm /></p>
                    <p>New to the Glottal Stop? <span onClick={toggleSignUp} className="signup-link clickable">Click here to sign up</span></p>
                    {showSignUp && <SignUp />}
                </div>
            )}
        </div>
    );
};

export default Header;