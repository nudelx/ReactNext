import React from 'react'
const API = {
  begin: () =>
    new Promise((yes, no) => {
      setTimeout(() => yes({ time: new Date().getTime() }), 1000)
    })
}

export default props => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    console.log('inside useEffect', props.userId)
    setLoading(true)
    API.begin({ userId: props.userId })
      .then(data => setData(data))
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }, [props.userId])

  return {
    data,
    loading
  }
}
