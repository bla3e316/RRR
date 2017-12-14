import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Link,
    Route
        } from  'react-router-dom';
//import {Match} from 'react-router';
import GamesPage from './GamesPage'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <Link to="games">Games</Link>
                </p>
                <p className="App-intro">
                    <Link to="/">Home</Link>
                </p>
                <Route path="/games" component={GamesPage} />
            </div>
        );
    }
}
export default App;
