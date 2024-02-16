import { Link, Outlet } from 'react-router-dom'
import { AuthStatus } from '../components/Auth/AuthStatus.tsx'

export function RootLayout () {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <AuthStatus />

      <Outlet />
    </div>
  )
}
