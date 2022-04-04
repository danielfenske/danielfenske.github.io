// DEPENDENCIES
import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

// APP VIEWS
import NavBar from './NavBar/NavBar';
import HomeView from './HomeView/HomeView';
import PortfolioView from './PortfolioView/PortfolioView';
import Footer from './Footer/Footer';

// STYLING
import './Styles/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Redirect exact from="/" to="home" />

        <Route exact path="/home">
          <HomeView />
        </Route>

        <Route exact path="/portfolio">
          <PortfolioView />
        </Route>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
