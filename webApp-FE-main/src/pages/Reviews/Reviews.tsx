import React from 'react';

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

const fakeReviews: Review[] = [
  {
    id: 1,
    user: 'John Doe',
    rating: 4,
    comment: 'Great product! I would highly recommend it.',
  },
  {
    id: 2,
    user: 'Jane Smith',
    rating: 5,
    comment: 'Amazing service. Fast delivery and excellent customer support.',
  },
  {
    id: 3,
    user: 'Bob Johnson',
    rating: 3,
    comment: 'The product is okay, but it could be improved.',
  },
];

const ReviewList: React.FC = () => {
  return (
    <div>
      <h2>Customer Reviews</h2>
      {fakeReviews.map((review) => (
        <div key={review.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <p>User: {review.user}</p>
          <p>Rating: {review.rating}/5</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
