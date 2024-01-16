// src/components/SignUp.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase';
import Button from '../styles/MaterialUI/Button';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        console.log('Handling sign-up...');
        const auth = getAuth(firebaseApp);
        //it's the starting point for using Firebase Authentication in
        //your app by giving you the Auth interface. You don't need to
        //call it multiple times, just initialize it once.
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up successfully!');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.error('Email is already in use. Please sign in or use a different email.');
            }
            else {
                console.error('Other error signing up:', error.message);
            }
        }
    };

    return (
        <div>
            <h3>Sign Up</h3>
            <p>
                <label>Email:   </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </p>
            <p>
                <label>Password:   </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </p>
            <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
        </div>
    );
};

export default SignUp;