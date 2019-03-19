import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Todo from './list'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      item:'',
      list:[]
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    //this.delete=this.delete.bind(this);
  }
  onChange(event){
    this.setState({item:event.target.value});
  }
  onSubmit(event){
    event.preventDefault();
    this.setState({
      item:'',
      list:[...this.state.list,this.state.item]
    })
  }

  render() {
    return (
        <div className='App'>
          <input type='text' value={this.state.item} placeholder='Enter your task' onChange={this.onChange}/>
          <button onClick={this.onSubmit}>Submit</button>
          <Todo list={this.state.list}/>
        </div>
    );
  }
}

export default App;
