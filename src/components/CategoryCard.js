import React from 'react';
import './../App.css';

export default class CategoryCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            edit: false,
            name: this.props.element
        }
    }

    editItem = () => {this.setState({edit: true})};

    done = (e) => {
        if(e.key === 'Enter'){
            this.handleSubmit();
        }
    };

    handleSubmit = () => {
        const {changeItem, index} = this.props;
        this.setState({edit: false});
        changeItem(index, this.state.name);
    }

    change = (e) => {
        this.setState({name: e.target.value});
    }

    refresh = () => {
        this.setState({name: this.props.element});
    }



    render(){
        var {element} = this.props;
        const {edit} = this.state;
        const component = edit ? <input autoFocus type="string" id="input" value={this.state.name} onFocus={this.refresh} onKeyPress={this.done} onChange={this.change} onBlur={this.handleSubmit}/> : <div>{element}</div>;

        return <button className="text" onClick={()=>this.editItem()}>{component}</button>
    }
}
