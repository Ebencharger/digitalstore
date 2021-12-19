import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import { Nav } from './NAVIGATION/Nav';
import { Details } from './VIEWS/Details';
import { Home } from './VIEWS/Home';


function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route  path="/details/:id" component={Details}/>
         <Route  path="/details/:id/:id" component={Details}/>
       </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
