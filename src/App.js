import React, { Component } from 'react'
import './App.css'
import Card from './components/card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card title="nirtzur" />
        <Card title="nudelx" />
        <Card title="orlavy" />
        <Card title="rond" />
      </div>
    )
  }
}

export default App
