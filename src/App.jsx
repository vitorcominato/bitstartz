import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.scss';
import './assets/styles/utils.scss';
import Home from './pages/Home/Home';

const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Route path="/" exact component={Home} />
    </div>
  </HashRouter>
);

export default App;
