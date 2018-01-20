import React from 'react';

class AddNumber extends React.Component {
  render(props) {
    return (
      <div>
        <form 
          onSubmit={this.props.handleNumberInputClick}>
          <input type="text" placeholder="Enter a Number" onChange={this.props.handleNumberChange}/>
          <input type="submit" value="Click to Confirm!"/>
        </form>
      </div>
    );
  }
}

export default AddNumber;