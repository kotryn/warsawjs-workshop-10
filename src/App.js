import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import TransactionList from './components/TransactionList'
import TransactionForm from './components/TransactionForm'
import CategoryList from './components/CategoryList'
import CategoryForm from './components/CategoryForm'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: 0,
            transactionList: ['a', 'b', 'c', 'd', 'e'],
            categoryList: ['test'],
            isCategoryList: true
        }
    }
    increment = () => {this.setState({counter: this.state.counter+1})};
    decrement = () => {this.setState({counter: this.state.counter-1})};

    deleteItem = (id) => {
        this.state.isCategoryList ? this.setState({categoryList: this.state.categoryList.filter((item, index) => { return id!==index })}) : this.setState({transactionList: this.state.transactionList.filter((item, index) => { return id!==index })})
    };

    addItem = (name) => {
        !/^ *$/.test(name) && this.state.isCategoryList ? this.setState({categoryList: this.state.categoryList.concat(name)}) : this.setState({transactionList: this.state.transactionList.concat(name)});
    };
    changeItem = (id, name) => {
        if(!/^ *$/.test(name)){
            if(!this.state.isCategoryList) {
                const {transactionList} = this.state;
                transactionList[id] = name;
                this.setState({transactionList: transactionList});
            }
            else{
                const {categoryList} = this.state;
                categoryList[id] = name;
                this.setState({categoryList: categoryList})
            }
        }
    };
    changeList = () => { this.setState({isCategoryList: !this.state.isCategoryList}) };
  render() {
        const {name} = this.props;
        const {transactionList, categoryList} = this.state;
        const component = this.state.isCategoryList ? (
          <div>
              <div><CategoryForm  addItem={this.addItem}/></div>
            <div><CategoryList categoryList={categoryList} deleteItem={this.deleteItem} changeItem={this.changeItem} /></div>
          </div>)
        :
          (<div>
              <div><TransactionForm  addItem={this.addItem}/></div>
              <div><TransactionList transactionList={transactionList} deleteItem={this.deleteItem} changeItem={this.changeItem} /></div>
          </div>)
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
          {component}
          <button onClick={this.changeList}>change</button>
      </div>
    );
  }
}

export default App;
