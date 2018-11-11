import React from 'react'
import { lorem, gitImagePath, Emoji } from './cardUtils'
import useCardState from './useCardState'
import useClickHook from './useClickHook'

const User = React.memo(
  React.lazy(
    () => new Promise(yes => setTimeout(() => yes(import('./user')), 5000))
  )
)

export default ({ title }) => {
  // 🤓 ☝️ convention convention convention
  const { onChange, like, onLike, onDisLike } = useCardState(0) // any API
  const { click, onClick } = useClickHook(0)

  return (
    <div className="card">
      <div className="title inline">
        <React.Suspense fallback={<div>LOADING .... </div>}>
          <User
            like={like}
            title={title}
            gitImagePath={gitImagePath}
            onClick={onClick}
          />
          {click}
        </React.Suspense>
      </div>
      <div className="body">{lorem}</div>
      <div className="footer">
        <button onClick={onChange.bind(null, '+') /* or use onLike*/}>
          <Emoji i="👍" />
        </button>
        <button onClick={onChange.bind(null, '-') /* or onDisLike*/}>
          <Emoji i="👎" />
        </button>
      </div>
    </div>
  )
}
