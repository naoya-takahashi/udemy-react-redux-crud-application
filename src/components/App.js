import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    // console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
  return (
    <React.Fragment>
      <div>counter {this.state.count}</div>
      <button onClick={this.handlePlusButton}>plus counter</button>
      <button onClick={this.handleMinusButton}>minus counter</button>
    </React.Fragment>
  )
  }
}

export default App;
