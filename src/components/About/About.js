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
             </div>
            
            <Footer></Footer>
        </div>
    );
};

export default About;