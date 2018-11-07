import React from 'react'

export default ({ title, gitImage }) => (
  <img className="image" alt={title} src={`${gitImage}${title}`} />
)
