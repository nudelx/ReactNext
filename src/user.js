import React from 'react'
import { Emoji } from './cardUtils'

export default ({ title, gitImagePath, onClick, like }) => {
  return (
    <>
      {' '}
      <img alt={title} src={`${gitImagePath}${title}`} onClick={onClick} />
      <span>{title}</span>
      <Emoji i="❤️" className="right-side" extra={like} />{' '}
    </>
  )
}
