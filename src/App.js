import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import './App.scss';
import WelcomePage from './pages/WelcomePage';
import SearchPage from './pages/SearchPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/search">검색페이지로</Link>
          <Switch>
            <Route path="/search" component={SearchPage} />
            <Route path="/" component={WelcomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
