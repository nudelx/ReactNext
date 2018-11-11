import React from 'react'
import { lorem, gitImagePath, Emoji } from './cardUtils'
export default class extends React.Component {
  state = { like: 0 }

  onLike = () => this.setState(({ like }) => ({ like: like + 1 }))
  onDisLike = () =>
    this.setState(({ like }) => ({ like: like ? like - 1 : like }))

  render() {
    const { title } = this.props
    const { like } = this.state
    return (
      <div className="card">
        <div className="title inline">
          <img alt={title} src={`${gitImagePath}${title}`} />
          <span>{title}</span>
          <Emoji i="❤️" className="right-side" extra={like} />
        </div>
        <div className="body">{lorem}</div>
        <div className="footer">
          <button onClick={this.onLike}>
            <Emoji i="👍" />
          </button>
          <button onClick={this.onDisLike}>
            <Emoji i="👎" />
          </button>
        </div>
      </div>
    )
  }
}
