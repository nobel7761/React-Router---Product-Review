import React from 'react';
import { Image } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import './ReviewCard.css';


const ReviewCard = (props) => {
    const { name, picture, review, rating } = props.review;




    return (
        <div className='card-container'>
            <Image className='card-image' src={picture} />
            <div className='review-details position-relative'>
                <div className='position-absolute top-0 mt-3'>
                    <h3 className='fw-bold '>{name}</h3>
                </div>
                <p title={review}>
                    {review.length > 200 ? review.slice(0, 200) + '...' : review}
                </p>
                <p className='d-flex align-items-center position-absolute bottom-0'>Ratings: <ReactStars
                    count={5}
                    value={rating}
                    size={28}
                    isHalf={true}
                    color="gray"
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="blue"
                    border="2px solid black"
                /></p>
            </div>
        </div >
    );
};

export default ReviewCard;