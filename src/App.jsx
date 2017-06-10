import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const Card =  (props) => {
	return (
  <div style={{margin: '1em'}}>
    <div style={{display: 'inline-block', marginLeft: 10}}>
      console.log(props)
    	<div style={{fontSize: '1.25em', fontWeight: 'bold'}} >{props.userName}</div>
      <div>{props.points}</div>
    </div>
  </div>
  );
};

class Form extends React.Component {
	state = {
    userName: '',
    points: 0
  }
	handleSubmit= (event) => {
  	event.preventDefault();
    this.props.onSubmit([this.state.userName, this.state.points]);
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
        <label> Name:
          <input type="text"
            value = {this.state.userName}
            onChange={(event) => this.setState({userName : event.target.value})}
            placeholder="Instructor username" />

        </label>
        <label> Points:
          <input type="text"
            value = {this.state.points}
            onChange={(event) => this.setState({points : event.target.value})}
            placeholder="points of happiness" />

        </label>
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
