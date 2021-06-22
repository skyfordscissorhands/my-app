import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div>

      
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contactme" component={Contact} />
        <Route exact path="/aboutme" component={Profile} />

        </Switch>
      </Router>

     
    </div>
  );
}

export default App;
