import { useAppSelector } from "./redux";

export function useAuth() {
  const {id, email, token} = useAppSelector((state) => state.userSlice)

  return {
    // !! = true
    isAuth: !!email,
    email,
    id,
    token
  }
}