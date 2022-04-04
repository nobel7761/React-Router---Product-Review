import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
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