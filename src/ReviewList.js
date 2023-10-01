import React from 'react';

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
