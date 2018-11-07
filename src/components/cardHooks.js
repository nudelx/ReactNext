import React from 'react'
import { cardState } from './states/cardState'
import { Emoji, lorem, gitImage } from './cardUtils'
const User = React.memo(
  React.lazy(
    () => new Promise(yes => setTimeout(() => yes(import('./user')), 10000))
  )
)

export default ({ title }) => {
  const { like, setLike } = cardState()
  const onLike = () => setLike(like + 1)
  const onDislike = () => setLike(like ? like - 1 : like)

  return (
    <div className="card">
      <div className="title inline">
        <React.Suspense fallback={<div>Loading...</div>}>
          <User title={title} gitImage={gitImage} />
        </React.Suspense>
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
