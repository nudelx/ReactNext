import React, { Component } from 'react'
import './App.css'
// import Card from './card'
import CardNext from './cardNext'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardNext title="nudelx" />
        <CardNext title="nirtzur" />
        <CardNext title="goralt" />
        <CardNext title="avidanfeldman" />
      </div>
    )
  }
}

export default App
