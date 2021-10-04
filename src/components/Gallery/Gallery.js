import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Gallery.css"
const Gallery = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="title-gallery my-5">Photo Gallery</h1>
            <div className="image-gallery">
                <img className="single-image" src="./images/1.jpg" alt="" />
                <img className="single-image" src="../../images/2.jpg" alt="" />
                <img className="single-image" src="../../images/3.jpg" alt="" />
                <img className="single-image" src="../../images/4.jpg" alt="" />
                <img className="single-image" src="../../images/5.jpg" alt="" />
                <img className="single-image" src="../../images/6.jpg" alt="" />
                <img className="single-image" src="../../images/7.jpg" alt="" />
                <img className="single-image" src="../../images/8.jpg" alt="" />
                <img className="single-image" src="../../images/9.jpg" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;