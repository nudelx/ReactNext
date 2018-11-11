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
  const { onChange, like } = useCardState(0)
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
        </React.Suspense>
      </div>
      <div className="body">{lorem}</div>
      <div className="footer">
        {click}
        <button onClick={onChange.bind(null, '+')}>
          <Emoji i="👍" />
        </button>
        <button onClick={onChange.bind(null, '-')}>
          <Emoji i="👎" />
        </button>
      </div>
    </div>
  )
}
