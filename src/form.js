import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
    pass: ''
  }

  handleUserInput = e => {
    this.setState({ name: e.target.value })
  }

  handlePasswordInput = e => {
    this.setState({ pass: e.target.value })
  }

  render() {
    console.log(this.state.name)
    return (
      <form className="form">
        <h2>React Form</h2>
        <ul>
          <li>
            <label htmlFor="name">User Name</label>
            <input
              onChange={this.handleUserInput}
              name="name"
              id="name"
              placeholder="name"
              value={this.state.name}
            />
          </li>

          <li>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handlePasswordInput}
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </li>
          <li>
            <button type="submit" name="submith">
              Save
            </button>
            <button type="reset">clear</button>
          </li>
        </ul>
      </form>
    )
  }
}
