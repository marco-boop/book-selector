import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from '../firebase';
import Button from '../styles/MaterialUI/Button';


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
        <Button onClick={() => handleSignOut()}>
            Sign Out
        </Button>
    );
};

export default SignOutButton;