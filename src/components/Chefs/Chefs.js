import React from 'react';
import "./Chef.css"

const Chefs = () => {
    return (
        <div >
            <h1 className="text-center my-5">Top Chefs</h1>
            <div className="chef container mb-5">
                <div>
                    <img className="chef-photo" src="./images/c1.jpg" alt="" />
                    <h5 className="text-center my-2"> Gordon Ramsay</h5>
                </div>
                <div>
                    <img className="chef-photo" src="./images/c2.jpg" alt="" />
                    <h5 className="text-center my-2">Alain Ducasse</h5>
                </div>
                <div>
                    <img className="chef-photo" src="./images/c4.jpg" alt="" />
                    <h5 className="text-center my-2">Nusret</h5>
                </div>
               

            </div>

        </div>
    );
};

export default Chefs;