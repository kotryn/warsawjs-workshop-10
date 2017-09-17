import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: 0
        }
    }
    increment = () => {this.setState({counter: this.state.counter+1})}
    decrement = () => {this.setState({counter: this.state.counter-1})}
  render() {
        console.log(this.state);
        const {name} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          Hi {name}: {this.state.counter}
        </p>

          <Counter name="Increment" func={this.increment}/> <Counter name="Decrement" func={this.decrement}/>
      </div>
    );
  }
}

export default App;
