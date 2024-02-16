import { useAuth } from '../../hooks'
import { useNavigate } from 'react-router-dom'

export function AuthStatus () {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p>You are not logged in.</p>
  }

  return (
    <p>
      Welcome {auth.user?.username}!{' '}
      <button
        onClick={() => {
          auth.signOut(() => navigate('/'))
        }}
      >
        Sign out
      </button>
    </p>
  )
}
