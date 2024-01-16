import React, { useContext } from 'react';
import SignInForm from '../components/SignInForm';
import SignOutButton from '../components/SignOut';
import BookSelector from '../components/BookSelector';
import SignUp from '../components/SignUp';
import { MyContext } from '../App';
import '../styles/HomePage.css';

const HomePage = () => {
    // console.log("This is the Home Page function");

    const { state } = useContext(MyContext);
    const uid = state.user?.uid;
    const email = state.user?.email;
    // console.log(uid);

    return (
        < div className='container'>
            <h1>The Glottal Stop</h1>
            {uid ? (
                <p>You are signed in: {uid} - {email}
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

export default HomePage;
