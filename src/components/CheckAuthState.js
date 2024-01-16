// src/components/SignUp.js
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../firebase';
import SignUp from '../components/SignUp';
import SignInForm from '../components/SignInForm';
import SignOutButton from '../components/SignOut';
// import { Link } from 'react-router-dom';
import BookSelector from '../components/BookSelector';


const AuthStatus = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth(firebaseApp);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <div>
            {user ? (
                <p>User is signed in: {user.uid} - {user.email}
                    <BookSelector />
                    <SignOutButton />
                </p>
            ) : (
                <p>Sign in or sign up below:<br></br>
                    <SignInForm />
                    <SignUp />
                </p>
            )
            }
        </div >
    );
};

export default AuthStatus;