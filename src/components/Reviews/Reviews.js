import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='mb-5'>
            <h1 className='text-center fw-bold my-5'>Our Customers Review!!!</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;