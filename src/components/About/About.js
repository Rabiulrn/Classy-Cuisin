import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./About.css";

const About = () => {
    return (
       
        <div>
             <Header></Header>
             <div className="about-section">
             <h1>Wellcome</h1>
            <h6>We try to teach different kind of recipe in a easy way</h6>
            <br />
            <br />
            <h2>We are Social Learners</h2>
            <p>We learn together. We empower and inspire our learners, our partners, and ourselves to develop through the power of lifelong learning.</p>
            <br />
            <h2>We are Experimental</h2>
            <p>Our innovation is led by data, curiosity and the occasional happy accident.</p>
            <br />
            <h2>We are Purposeful</h2>
            <p>our opportunity to make a long term difference to the lives of millions around the world.

</p>
             </div>
            
            <Footer></Footer>
        </div>
    );
};

export default About;