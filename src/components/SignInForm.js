import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase';

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(firebaseApp); // Assuming Firebase has been initialized correctly

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in successfully');
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                console.error('Invalid credential. Try signing up first.')
            }
            else {
                console.error('Other error signing in:', error.message);
            }
        }
    };

    return (
        <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignInForm;