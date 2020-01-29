import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {ProductsPage} from './pages/ProductsPage'
import {ProductOptions} from './pages/ProductOptions'
import {ProductPage} from './pages/ProductPage'
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/options" component={ProductOptions} />
        <Route exact path="/product" component={ProductPage} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
