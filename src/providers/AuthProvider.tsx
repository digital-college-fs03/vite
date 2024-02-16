import * as React from 'react'
import { useState } from 'react'
import { User } from '../types/auth.ts'
import { AuthService } from '../services/auth.ts'
import { AuthContext } from '../components/Auth/AuthContext.tsx'

export function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)

  const signIn = (newUser: User, callback: VoidFunction) => {
    return AuthService.signIn(() => {
      setUser(newUser)
      callback()
    })
  }

  const signOut = (callback: VoidFunction) => {
    return AuthService.signOut(() => {
      setUser(null)
      callback()
    })
  }

  const value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
