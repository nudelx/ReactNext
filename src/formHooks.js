import React from 'react'
import useFormState from './useFormState'
import useFetching from './useFetching'

export default props => {
  const { errors, fields, setters } = useFormState()
  const { data } = useFetching({ userId: props.userId })

  const handleUserInput = e => {
    setters.setName(e.target.value)
  }

  const handlePasswordInput = e => {
    setters.setPass(e.target.value)
  }
  console.log(data)
  return (
    <form className="form">
      <h2>React Form</h2>
      <ul>
        <li>
          <label htmlFor="name">User Name</label>
          <input
            onChange={handleUserInput}
            name="name"
            id="name"
            placeholder="name"
            value={fields.name}
          />
          {errors.name ? <span className="error">{errors.name}</span> : null}
        </li>

        <li>
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePasswordInput}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={fields.pass}
          />
          {errors.pass ? <span className="error">{errors.pass}</span> : null}
        </li>

        <li>
          <button type="submit" name="submith">
            Save
          </button>
          <button type="reset">clear</button>
        </li>
      </ul>
    </form>
  )
}
