import React, { Component } from 'react'
import './App.css'
// import Card from './card'
import CardNext from './cardNext'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardNext title="nudelx" />
        <CardNext title="david" />
        <CardNext title="itay" />
        <CardNext title="ron" />
      </div>
    )
  }
}

export default App
