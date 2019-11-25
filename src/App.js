import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  
  state = {
    basket: 0,
  }

  addToBasket = () => {
    console.log("addToBasket clicked");
    this.setState({
      basket: this.state.basket + 1
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav myBasket={this.state.basket}/>
          <Switch>
            <Route exact path="/" render={() => <Home sale="150" toBasket={this.addToBasket}/>} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
