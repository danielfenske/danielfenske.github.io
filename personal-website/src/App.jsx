// DEPENDENCIES
import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

// APP VIEWS
import HomeView from './HomeView/HomeView';
import PortfolioView from './PortfolioView/PortfolioView';


// STYLING
import './Styles/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect exact from="/" to="home" />

        <Route exact path="/home">
          <HomeView />
        </Route>

        <Route exact path="/portfolio">
          <PortfolioView/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
