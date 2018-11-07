import React from 'react'
import { cardState } from './states/cardState'
import { Emoji, lorem, gitImage } from './cardUtils'

export default ({ title }) => {
  const { like, setLike } = cardState()
  const onLike = () => setLike(like + 1)
  const onDislike = () => setLike(like ? like - 1 : like)

  return (
    <div className="card">
      <div className="title inline">
        <img className="image" alt={title} src={`${gitImage}${title}`} />
        <div>{title} </div>
        <Emoji i={'❤️'} extra={like} className="likes" />
      </div>
      <div className="body">{lorem} </div>
      <div className="footer">
        <button onClick={onLike}>
          <Emoji i={'👍'} />
        </button>
        <button onClick={onDislike}>
          <Emoji i={'👎'} />
        </button>
      </div>
    </div>
  )
}
