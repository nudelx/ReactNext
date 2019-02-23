import React from 'react'
import Emoji from './emoji'
const gitPath = 'https://avatars1.githubusercontent.com/'

export default ({ title, score }) => (
  <div className="user">
    <div className="title-holder">
      <img src={`${gitPath}${title}`} alt={title} />
      <span>{title}</span>
    </div>
    <span>
      <Emoji i={'❤️'} extra={score} />
    </span>
  </div>
)
