import React from 'react'
import Emoji from './emoji'
// import User from './user'
import useScore from './useScore'
import useHeaderClick from './useHeaderClick'
import context from './context'

const User = React.memo(
  React.lazy(
    () => new Promise(yes => setTimeout(() => yes(import('./user')), 1000))
  )
)
const Loading = () => <div>LOADING COMPONENT !! </div>
const EmojiMemo = React.memo(Emoji)
const bodyText =
  'Incididunt veniam commodo consectetur irure irure velit aliqua laboris in ad deserunt laborum deserunt. Magna dolor quis qui in. Aliquip velit voluptate velit ex dolore ad reprehenderit officia velit sit ad. Mollit ipsum anim Lorem eu. Ex adipisicing officia qui anim id esse eiusmod anim aliqua mollit non. Velit consectetur ut voluptate duis excepteur velit quis veniam id deserunt ipsum ipsum sint laborum.'

export default props => {
  const { score, onLike, onDisLike } = useScore(0)
  const { headerClick, onChange } = useHeaderClick(0, props.onChange)
  const contextHook = React.useContext(React.createContext(context))
  const { title } = props
  return (
    <div className="card">
      <div className="title" onClick={onChange.bind(null, '+')}>
        <React.Suspense fallback={<Loading />}>
          <User title={title} score={score} />
        </React.Suspense>
        <div>
          Location:
          {contextHook.locale}
        </div>
        <div>
          TimeZone:
          {contextHook.timeZone}
        </div>
      </div>
      <div className="body">
        {bodyText}
        <div>{headerClick}</div>
      </div>
      <div className="footer">
        <button onClick={onLike}>
          <EmojiMemo i={'👍'} />
          {/* <Emoji i={'👍'} /> */}
        </button>
        <button onClick={onDisLike}>
          <EmojiMemo i={'👎'} />
          {/* <Emoji i={'👎'} /> */}
        </button>
      </div>
    </div>
  )
}
