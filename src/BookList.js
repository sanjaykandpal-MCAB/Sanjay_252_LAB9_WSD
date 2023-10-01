import React from 'react';
  import Book from './Book.js';
  import './BookList.css'

  function BookList({ books }) {
    return (
      <div className="book-list">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    );
  }

  export default BookList;