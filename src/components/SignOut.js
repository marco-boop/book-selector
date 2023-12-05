import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../firebase';

// Assuming you have initialized Firebase as firebaseApp
//Commenting out because I already did this on signup
const auth = getAuth(firebaseApp);

// Function to handle user sign out:


const SignOutButton = () => {

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log('User signed out successfully');
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    return (
        <button onClick={() => handleSignOut()}>
            Sign Out
        </button>
    );
};

export default SignOutButton;