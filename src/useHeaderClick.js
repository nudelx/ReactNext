import React from 'react'

export default (init, reduxOnChange) => {
  const [headerClick, setHeaderClick] = React.useState(init)

  const onChange = change =>
    change === '+'
      ? setHeaderClick(headerClick + 1)
      : setHeaderClick(headerClick - 1)

  React.useEffect(
    () => {
      console.log('render header!!!')
      if (headerClick >= 10) {
        document.body.style.backgroundColor = 'red'
        if (typeof reduxOnChange === 'function') {
          reduxOnChange(headerClick)
        }
      }
    },
    [headerClick]
  )

  return {
    onChange,
    headerClick,
    setHeaderClick
  }
}
