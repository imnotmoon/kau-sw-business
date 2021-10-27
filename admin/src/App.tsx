import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/" component={MainPage}>
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
