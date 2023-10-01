
    import React, { useState } from 'react';
    import BookList from './BookList';
    import SearchForm from './SearchForm';
    import './BookSearch.css';


    function BookSearch() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = (searchTerm) => {
    
        const apiKey = 'AIzaSyAc7DSmNvQ_Sm5r9fbIkmH5Gp-J7o6DHXw'; 
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;


        setBooks([]);
        setError(null);
        setLoading(true);

    
        fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {

            if (data && data.items) {
            const bookData = data.items.map((item) => {
                const volumeInfo = item.volumeInfo;
                return {
                id: item.id,
                title: volumeInfo.title || 'No title available',
                author: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown author',
                description: volumeInfo.description || 'No description available',
                thumbnail: volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : '',
                };
            });
            setBooks(bookData);
            } else {
            setBooks([]);
            }
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching book data:', error);
            setError('An error occurred while fetching book data.');
            setLoading(false);
        });
    };

    return (
        <div>
        <SearchForm onSearch={handleSearch} />
        {loading && <p>Loading your searched book...</p>}
        {error && <p>{error}</p>}
        <BookList books={books} />
        </div>
    );
    }

    export default BookSearch;
