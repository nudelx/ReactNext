import React from 'react'

export default ({ i, extra, className }) => {
  console.log('render emoji')
  return (
    <span className={`emoji ${className}`}>
      {i}
      {extra}
    </span>
  )
}
