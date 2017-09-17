import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import TransactionList from './components/TransactionList'
import TransactionForm from './components/TransactionForm'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: 0,
            transactionList: ['a', 'b', 'c', 'd', 'e']
        }
    }
    increment = () => {this.setState({counter: this.state.counter+1})};
    decrement = () => {this.setState({counter: this.state.counter-1})};
    deleteItem = (id) => {
        this.setState({transactionList: this.state.transactionList.filter((item, index) => { return id!==index })})
    };
    addItem = (name) => {
        this.setState({transactionList: this.state.transactionList.concat(name)})
    };
    changeItem = (id, name) => {
        console.log(id);
        var {transactionList} = this.state;
        transactionList[id] = name;
        this.setState({transactionList: transactionList})
    };
  render() {
        const {name} = this.props;
        const {transactionList} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          Hi {name}: {this.state.counter}
        </p>

          <div><Counter name="Increment" func={this.increment}/> <Counter name="Decrement" func={this.decrement} /></div>
          <div><TransactionForm  addItem={this.addItem}/></div>
          <div><TransactionList transactionList={transactionList} deleteItem={this.deleteItem} changeItem={this.changeItem} /></div>

      </div>
    );
  }
}

export default App;
