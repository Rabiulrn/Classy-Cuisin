import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Recipes from "./components/Recipes/Recipes";
import Gallery from "./components/Gallery/Gallery";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div>
      <Router>
          <Switch>
             <Route exact  path="/" >
               <Home/>
             </Route>
             <Route exact path="/home" >
               <Home/>
             </Route>
             <Route exact path="/about" >
               <About/>
             </Route>
             <Route exact path="/recipes" >
               <Recipes/>
             </Route>
             <Route exact path="/photo-gallery" >
               <Gallery/>
             </Route>
             
             <Route path="*">
               <NotFound/>
             </Route> 
              
      </Switch>

          </Router>
    </div>
  );
}

export default App;
