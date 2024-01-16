// src/components/BookSelector.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookSelector = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // State to track the selected category
    const [selectedFilter, setSelectedFilter] = useState(''); // State to track the selected filter
    const [filteredBooks, setFilteredBooks] = useState([]); // State to store filtered books
    const [columnNames, setColumnNames] = useState([]); // State to store column names
    const [booksFound, setBooksFound] = useState(true); // Did we find any books


    useEffect(() => {
        // Fetch books data from your server
        axios.get('http://localhost:3001/books')
            .then(response => {
                setBooks(response.data);
                setFilteredBooks(response.data); // Initially, set filtered books to all books

                // Extract column names from the first book
                const firstBook = response.data[0];
                if (firstBook) {
                    const columns = Object.keys(firstBook);
                    // Exclude 'id', 'author', and 'title' from column names
                    const filteredColumns = columns.filter(column => !['id', 'author', 'title'].includes(column));
                    setColumnNames(filteredColumns);
                }
                // Set initial value for booksFound
                setBooksFound(response.data.length > 0);
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    // Handle category selection
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setSelectedCategory(selectedCategory);
        setSelectedFilter(''); // Reset selected filter when category changes

        // Filter books based on the selected category
        if (selectedCategory === '') {
            setFilteredBooks(books); // If no category is selected, show all books
        } else {
            const filtered = books.filter(book => book[selectedCategory] === 1);
            setFilteredBooks(filtered);
        }
    };

    // Generate filter options based on selected category
    const filterOptions = selectedCategory
        ? columnNames
            .filter(column => column !== selectedCategory) // Exclude the selected category from filter options
            .map(column => (
                <option key={column} value={column}>
                    {column.replace(/_/g, ' ')} {/* Replace underscores with spaces */}
                </option>
            ))
        : [];

    // Handle filter selection
    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        setSelectedFilter(selectedFilter);

        // Filter books based on the selected filter value
        if (selectedFilter !== '') {
            const filtered = filteredBooks.filter(book => book[selectedCategory] === 1 && book[selectedFilter] === 1);
            setFilteredBooks(filtered);
        }
    };

    return (
        <div>
            <h2>Book Selector</h2>

            {/* Category dropdown */}
            <label>
                Select a category:
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All</option>
                    {columnNames.map(column => (
                        <option key={column} value={column}>
                            {column.replace(/_/g, ' ')} {/* Replace underscores with spaces */}
                        </option>
                    ))}
                </select>
            </label>

            {/* Filter dropdown */}
            {selectedCategory && (
                <label>
                    Select a filter:
                    <select value={selectedFilter} onChange={handleFilterChange}>
                        <option value="">All</option>
                        {filterOptions}
                    </select>
                </label>
            )}

            {/* Book list or no books found message */}
            {booksFound ? (
                <ul>
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map(book => (
                            <li key={book.id}>
                                <label>
                                    {book.title} by {book.author}
                                </label>
                            </li>
                        ))
                    ) : (
                        <p>No books found</p>
                    )}
                </ul>
            ) : (
                <p>Loading...</p>
            )}

            {/* Add additional UI elements or logic as needed */}
            <Link to="/">Go back to Homepage</Link>
        </div>
    );
};

export default BookSelector;