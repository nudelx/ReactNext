import React from 'react'
import Emoji from './emoji'
import User from './user'
const Card = () => {}
const bodyText =
  'Incididunt veniam commodo consectetur irure irure velit aliqua laboris in ad deserunt laborum deserunt. Magna dolor quis qui in. Aliquip velit voluptate velit ex dolore ad reprehenderit officia velit sit ad. Mollit ipsum anim Lorem eu. Ex adipisicing officia qui anim id esse eiusmod anim aliqua mollit non. Velit consectetur ut voluptate duis excepteur velit quis veniam id deserunt ipsum ipsum sint laborum.'

export default class extends React.Component {
  state = { score: 0 }

  onLike = () => this.setState(({ score }) => ({ score: score + 1 }))
  onDisLike = () =>
    this.setState(({ score }) => ({ score: score ? score - 1 : score }))

  render() {
    const { title, color } = this.props
    const { score } = this.state
    return (
      <div className="card" style={{ backgroundColor: color}}> 
        <div className="title">
          <User title={title} value={score} />
        </div>
        <div className="body">{bodyText}</div>
        <div className="footer">
          <button onClick={this.onLike}>
            <Emoji i={'👍'} />
          </button>
          <button onClick={this.onDisLike}>
            <Emoji i={'👎'} />
          </button>
        </div>
      </div>
    )
  }
}
