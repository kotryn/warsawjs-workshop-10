import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App2 from './App2'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: 0,
            list: ['a', 'b', 'c']
        }
    }
    click = () => {this.setState({counter: this.state.counter+1})}
  render() {
        console.log(this.state);
        const {name} = this.props;
        const list = this.state.list;
        const items = list.map((item, index) => (
            <ul key={index}>{item}</ul>
        ));
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {name}: {this.state.counter}
        </p>
          <button onClick={this.click}>+</button>
          <App2 name={'Test'}/>
          <div>{items}</div>
      </div>
    );
  }
}

export default App;
