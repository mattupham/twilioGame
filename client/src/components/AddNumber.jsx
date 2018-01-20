import React from 'react';

class AddNumber extends React.Component {
  render(props) {
    return (
      <div>
        <form 
          onSubmit={this.props.handleNumberInputClick}>
          <input type="number" placeholder="enter a number" onChange={this.props.handleNumberChange}/>
          <input type="submit" value="Confirm Number!"/>
        </form>
      </div>
    );
  }
}

export default AddNumber;