import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClickFunction }>
        +1
      </button>
    );
  }
}

const Result = (props) => {
	return (
  	<div> {props.counter} </div>
  );
};

// class App extends React.Component {
// 	state = {counter: 0};

//   incrementCounter = () => {
//   	this.setState((prevState) => ({
//       counter: prevState.counter + 1
//     }))
//   }

// 	render() {
//   	return (
//     	<div>
//       	<Button onClickFunction={this.incrementCounter}/><Result counter={this.state.counter}/>
//       </div>
//     );
//   };

// }

const Card =  (props) => {
	return (
  <div style={{margin: '1em'}}>
    <div style={{display: 'inline-block', marginLeft: 10}}>
    	<div style={{fontSize: '1.25em', fontWeight: 'bold'}} >{props.userName}</div>
    </div>
  </div>
  );
};

class Form extends React.Component {
	state = {userName: ''}
	handleSubmit= (event) => {
  	event.preventDefault();
    this.props.onSubmit(this.state.userName);
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
      	<input type="text"
        	value = {this.state.userName}
          onChange={(event) => this.setState({userName : event.target.value})}
        	placeholder="Instructor username" />
        <button type="submit">Add instructor</button>
      </form>
    );
  }
}


const CardList = (props) => {
	return (
  <div>
  	{props.cards.map(card =>
    	<div style={{ marginLeft: 10}}>
    	<div style={{fontSize: '1.25em', fontWeight: 'bold'}} >{card}</div>
    </div>
    )}
  </div>
  );
};




class App extends Component {
state = {
  cards: []
}
addNewCard = (cardInfo) =>{
  this.setState(prevState => ({
    cards: prevState.cards.concat(cardInfo)
  }));
};

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Form onSubmit={this.addNewCard}/>
          <CardList cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
