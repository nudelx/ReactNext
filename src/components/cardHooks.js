import React from 'react'
import { useCardState } from './states/cardState'
import { useClickState } from './states/clickState'
import { Emoji, lorem, gitImage } from './cardUtils'
const User = React.memo(
  React.lazy(
    () => new Promise(yes => setTimeout(() => yes(import('./user')), 10000))
  )
)

export default ({ title }) => {
  const { like, setLike } = useCardState()
  const onLike = () => setLike(like + 1)
  const onDislike = () => setLike(like ? like - 1 : like)
  const { click, setClick } = useClickState(0)
  const onClick = () => setClick(click + 1)

  return (
    <div className="card">
      <div className="title inline">
        <React.Suspense fallback={<div>Loading...</div>}>
          <User title={title} gitImage={gitImage} setClick={onClick} />
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
      {click}
    </div>
  )
}
