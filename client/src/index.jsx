import React from 'react';
import ReactDOM from 'react-dom';
import AddNumber from './components/AddNumber.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      guessNumber: null
    }
  }
   
  handleNumberChange(event) {
    this.setState({guessNumber: event.target.value});
  }

  handleNumberInputClick(event) {
    event.preventDefault();
    let guessNumber = this.state.guessNumber;
    axios.post('/message', {
      "guessNumber": guessNumber
    })
    .then(function (response) {
      let num = response.data
      alert(`you set ${num} as your number`);
    })
    .catch(function (error) { 
      console.log(error); 
    });
  }

  render() {
    return (
      <AddNumber
        handleNumberInputClick={this.handleNumberInputClick.bind(this)}
        handleNumberChange={this.handleNumberChange.bind(this)}
      />
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
