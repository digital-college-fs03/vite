import { useLocation, useNavigate } from 'react-router-dom'
import * as React from 'react'
import { useAuth } from '../hooks'

export function LoginPage () {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const from = location.state?.from?.pathname || '/'

  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string

    auth.signIn({ username }, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input
          name="username"
          type="text"
        />
        </label>
        {' '}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
