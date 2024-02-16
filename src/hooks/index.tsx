import * as React from 'react'
import { AuthContext } from '../components/Auth/AuthContext.tsx'

export function useAuth () {
  return React.useContext(AuthContext)
}
