import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import './index.css';

const App = () => (
  <div>
    <header>
      <i className="fa fa-navicon nav-icon"></i>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me" component={About} />
    </main>
  </div>
)

export default App;