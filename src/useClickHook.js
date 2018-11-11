import React from 'react'
export default init => {
  const [click, setClick] = React.useState(init)
  const onClick = () => setClick(click + 1)
  //cDM √
  React.useEffect(
    () => {
      // console.log('render')
      // const t = click > 10 ? (document.body.style.background = 'red') : null
      // return () => console.log('clean !!!')
    },
    [click]
  )

  return {
    click,
    setClick,
    onClick
  }
}
