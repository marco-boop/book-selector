// src/components/SignUp.js
import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '../firebase';

// Listen for changes in authentication state
const CheckAuth = getAuth(firebaseApp);
onAuthStateChanged(CheckAuth, (user) => {
    if (user) {
        // User is signed in
        console.log('User is signed in:', user.uid, "+", user.email);
    } else {
        // User is signed out
        console.log('User is signed out');
    }
});

export default CheckAuth;