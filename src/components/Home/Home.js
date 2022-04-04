import React from 'react';
import './Home.css';
import { Button, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import CustomLink from '../CustomLink/CustomLink';


const Home = () => {
    return (
        <div className='home-container'>
            <Container>
                {/* upper section  */}
                <div className='row mt-5'>
                    <div className='d-flex flex-column justify-content-center col-md-6 col-sm-12'>
                        <h1 className='fw-bolder'>Drive Safe</h1>
                        <h1 className='fw-bolder'><span className='colored-text'>SOMEONE</span> is waiting for <span className='colored-text'>YOU</span></h1>
                        <p>Your loved ones and your family needs you to get home safe every time! Drive safely and remember, everyone on the road with you is someone&#39;s family. The most important thing in the world is family.</p>

                        <CustomLink to="/">
                            <Button className='live-demo-btn'>Live Demo</Button>
                        </CustomLink>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <Image className='img-fluid image' src='images/banner-photo.jpg' />
                    </div>
                </div>

                {/* lower section */}
                <div>
                    <h1 className='fw-bolder text-center mt-5'>Customer Reviews</h1>
                </div>

            </Container>
        </div>
    );
};

export default Home; 