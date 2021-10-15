import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Characters,
  Films,
  Home,
} from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="characters">
              <Characters />
            </Route>
            <Route exact path="films">
              <Films />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
