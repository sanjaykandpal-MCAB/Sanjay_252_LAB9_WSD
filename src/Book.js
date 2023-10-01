import React, { useState } from 'react';
import './Book.css'
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';


function Book({ book }) {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="book-card">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">Author: {book.author}</p>
      <p className="book-description">{book.description}</p>
      <img src={book.thumbnail} alt={book.title} /> 
     
      <div className="reviews-container">
        <h3>Reviews:</h3>
        <ReviewList reviews={reviews} />
      </div>

      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
}

export default Book;
