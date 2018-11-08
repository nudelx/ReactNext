import React from 'react'

export default ({ title, gitImage, setClick }) => (
  <img
    onClick={setClick}
    className="image"
    alt={title}
    src={`${gitImage}${title}`}
  />
)
