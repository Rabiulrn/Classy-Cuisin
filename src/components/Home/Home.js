import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Chefs from '../Chefs/Chefs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Home.css"

const Home = () => {
    const [recipes, setReceipes] = useState([]);
    useEffect(() => {
        fetch('./recipes.json')
            .then(res => res.json())
            .then(data => setReceipes(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <h1 className="my-5 text-center">Top Recipes</h1>
            <div>
                <div className="row">
                {
                    recipes.map(recipe =><div className="col-lg-3 my-5">
                        <Card className="card1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="image" src={recipe.image} />
                    <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text>
                            <p>Estimate time :{recipe.time} min</p>
                            <p>Estimate cost :{recipe.cost} taka</p>
                            <p>Ingredients: {recipe.ingredients}</p>
                        </Card.Text>
                        <Button variant="outline-primary">Cook Now</Button>
                    </Card.Body>
                </Card>
                    </div>)
                }
                </div>
               
                
            </div>
            <Chefs></Chefs>
            <Footer></Footer>
        </div>
    );
};

export default Home;