import React from 'react'
export default () => {
  const [like, setLike] = React.useState(0)
  const onLike = () => setLike(like + 1)
  const onDisLike = () => setLike(like ? like - 1 : like)
  const onChange = value =>
    setLike(value === '+' ? like + 1 : like ? like - 1 : like)

  return {
    like,
    setLike,
    onLike,
    onDisLike,
    onChange
  }
}
