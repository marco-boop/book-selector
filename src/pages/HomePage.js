import React, { useContext } from 'react';
import BookSelector from '../components/BookSelector';
import { MyContext } from '../App';
import '../styles/HomePage.css';
import Header from '../components/Header';

const HomePage = () => {
    const { state } = useContext(MyContext);
    const uid = state.user?.uid;
    const email = state.user?.email;

    return (
        <div className='container'>
            <Header />
            <h1>The Glottal Stop</h1>
            {uid ? (
                <div>
                    {/* <p>You are signed in: {uid} - {email}</p> */}
                    <BookSelector />
                </div>
            ) : (
                <p>What I'm reading. Sign in to get started.</p>
            )}
        </div>
    );
};

export default HomePage;
