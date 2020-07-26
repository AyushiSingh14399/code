import React from 'react';
import './index.css';
//import './App.css';
//import Error from "./Error";
import Nav1 from './Navbar';
import Sales from './Sales';
import Home from './Home';
import { Route,Switch} from 'react-router-dom';

function App() {
 return (
   <>
  <Nav1 />
  
  <Switch>
    <Route exact path='/' component={Home}/>
    
    <Route exact path ='/Sales'  component={Sales}/>
  
  </Switch>
   </>

  );
}

export default App;
