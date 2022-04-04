import React from 'react';
import { Image } from 'react-bootstrap';
import './ReviewCard.css';


const ReviewCard = (props) => {
    const { name, picture, review, rating } = props.review;
    return (
        <div className='card-container'>
            <Image className='card-image' src={picture} />
            <div className='review-details'>
                <h3 className='fw-bold'>{name}</h3>
                <p title={review}>
                    {review.length > 200 ? review.slice(0, 200) + '...' : review}
                </p>
                <p>Ratings: <small>{rating} Star</small></p>
            </div>
        </div >
    );
};

export default ReviewCard;