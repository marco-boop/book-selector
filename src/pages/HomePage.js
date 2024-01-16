import React, { useContext } from 'react';
import BookSelector from '../components/BookSelector';
import { MyContext } from '../App';
import '../styles/HomePage.css';
import Header from '../components/Header';

const HomePage = () => {
    return (
        <div className='container'>
            <Header />
            <h1>The Glottal Stop</h1>
            {/* <div>
                <p>Content specific to the homepage</p>
                <BookSelector />
            </div> */}
        </div>
    );
};

export default HomePage;
