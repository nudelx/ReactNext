import React from 'react'
const validateName = f => (f && f.length > 2 ? null : 'Not Valid Name')
const validatePass = f =>
  f && f.length > 1 && /\d/.test(f) ? null : 'Not Valid Field'

export default () => {
  const [name, setName] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [nameError, setNameError] = React.useState(null)
  const [passError, setPassError] = React.useState(null)

  const fields = { name, pass }

  const errors = { name: nameError, pass: passError }

  const setters = { setName, setPass }
  React.useEffect(() => setNameError(name.length ? validateName(name) : null), [
    name
  ])
  React.useEffect(() => setPassError(pass.length ? validatePass(pass) : null), [
    pass
  ])

  return {
    errors,
    fields,
    setters
  }
}
