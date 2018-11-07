import React from 'react'

export const cardState = () => {
  const [like, setLike] = React.useState(0)
  const [click, setClick] = React.useState(0)
  return {
    like,
    click,
    setClick,
    setLike
  }
}
