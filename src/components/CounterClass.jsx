import React, { Component } from 'react'

export default class CounterClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  incClickHandler = () => {
    this.setState({count: this.state.count + 1})
  }

  decClickHandler = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.incClickHandler}>Inc</button>
        <button onClick={this.decClickHandler}>Dec</button>
      </div>
    )
  }
}