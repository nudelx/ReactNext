import React from 'react'

export const useCardState = () => {
  const [like, setLike] = React.useState(0)
  const [click, setClick] = React.useState(0)
  return {
    like,
    click,
    setClick,
    setLike
  }
}
