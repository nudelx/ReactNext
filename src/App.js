import React, { Component } from 'react'
import './App.css'
// import Card from './card'
import CardNext from './cardNext'
import From from './form'
import FromHooks from './formHooks'

class App extends Component {
  state = {
    userId: 22
  }
  componentWillMount() {
    setInterval(
      () => this.setState(state => ({ userId: state.userId + 1 })),
      3000
    )
  }
  render() {
    return (
      <div className="App">
        <FromHooks userId={this.state.userId} />
      </div>
    )
  }
}

export default App
