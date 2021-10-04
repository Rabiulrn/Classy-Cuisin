import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer container">
            <div>
                <h2>Address</h2>
                <h3>Badda,Gulshan</h3>
                <h4>Kamal atarkuk read,48/3</h4>
            </div>
            <div>
                <input type="text" placeholder="any query"/>
                <button>Send</button>
            </div>
            <div>
                <h1>About Us</h1>
            </div>
            </div>
           
            
        </div>
    );
};

export default Footer;