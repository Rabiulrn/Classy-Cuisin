import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Recipes from "./components/Recipes/Recipes";


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
             {/* <Route exact path="/employee">
               <Employee/>
             </Route>
            <Route exact path="/employee/:id">
                <SingleEmployee/>
              </Route>
             <Route path="*">
               <NotFound/>
             </Route> */}
              
      </Switch>

          </Router>
    </div>
  );
}

export default App;
