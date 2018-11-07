import React, { Component } from 'react'

const gitImage = 'https://avatars1.githubusercontent.com/'

export default class extends Component {
  state = { like: 0 }
  onDislike = () =>
    this.setState(({ like }) => ({ like: like ? like - 1 : like }))

  onLike = () => this.setState(({ like }) => ({ like: like + 1 }))

  render() {
    return (
      <div className="card">
        <div className="title inline">
          <img
            className="image"
            alt={this.props.title}
            src={`${gitImage}${this.props.title}`}
          />
          <div>{this.props.title} </div>
          <span className="likes" role="img" aria-label="img">
            ❤️ {this.state.like}
          </span>
        </div>
        <div className="body">
          Ipsum non eiusmod cillum ea exercitation aliquip reprehenderit tempor
          aliqua. Officia mollit consequat nostrud aliquip culpa occaecat aute
          exercitation officia. Exercitation proident consequat cupidatat elit
          anim cupidatat. Aliqua labore occaecat magna eiusmod sint nisi
          reprehenderit duis cillum anim. Mollit labore aute duis mollit minim
          aute consectetur pariatur est amet ex dolor sit.
        </div>
        <div className="footer">
          <button onClick={this.onLike}>
            <span role="img" aria-label="img">
              👍{' '}
            </span>
          </button>
          <button onClick={this.onDislike}>
            <span role="img" aria-label="img">
              👎{' '}
            </span>
          </button>
        </div>
      </div>
    )
  }
}
