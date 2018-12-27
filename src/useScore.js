import React from 'react'
export default init => {
  const [score, setLike] = React.useState(init)
  const onLike = () => setLike(score + 1)
  const onDisLike = () => setLike(score ? score - 1 : score)
  const onChange = value =>
    setLike(value === '+' ? score + 1 : score ? score - 1 : score)

  React.useEffect(
    () => {
      console.log('render score!!!')
      if (score >= 10) {
        document.body.style.backgroundColor = 'green'
        if (typeof reduxOnChange === 'function') {
          // reduxOnChange(score)
        }
      }
    },
    [score]
  )

  return {
    score,
    setLike,
    onLike,
    onDisLike,
    onChange
  }
}
