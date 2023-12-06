import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthStatus from '../components/CheckAuthState';
import SignInForm from '../components/SignInForm';
import SignOutButton from '../components/SignOut';
import BookSelector from '../components/BookSelector';
import SignUp from '../components/SignUp';

const HomePage = ({ state }) => {
    console.log("This is the Home Page function");

    const uid = state.user?.uid;
    const email = state.user?.email;

    return (
        <div>
            <h1>The Glottal Stop</h1>
            {state.user ? (
                <p>User is signed in: {uid} - {email}
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
        </div>
    );
};

export default HomePage;
