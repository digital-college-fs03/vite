export type User = Record<string, number | string> | null;

export interface AuthContextType {
  user: User;
  signIn: (user: User, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}
