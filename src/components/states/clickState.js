import React from 'react'

export const useClickState = initValue => {
  const [click, setClick] = React.useState(initValue)

  // CDM CDU
  React.useEffect(
    (...args) => {
      console.log('use click effect ')
      const t =
        click > 10 ? (document.body.style.backgroundColor = 'red') : null
    },
    [click]
  )

  return {
    click,
    setClick
  }
}
