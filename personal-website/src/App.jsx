// DEPENDENCIES
import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

// APP VIEWS
import HomeView from './HomeView/HomeView';


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
      </Router>
    </div>
  );
}

export default App;
