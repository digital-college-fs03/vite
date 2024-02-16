/**
 * This represents some generic auth provider API, like Firebase.
 */
const AuthService = {
  isAuthenticated: false,
  signIn (callback: VoidFunction) {
    AuthService.isAuthenticated = true
    setTimeout(callback, 100) // fake async
  },
  signOut (callback: VoidFunction) {
    AuthService.isAuthenticated = false
    setTimeout(callback, 100)
  },
}

export { AuthService }
