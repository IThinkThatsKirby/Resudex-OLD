import { useAuth } from "@redwoodjs/auth"
import { navigate, routes } from "@redwoodjs/router"
const SignoutBtn = () => {
  const { logOut } = useAuth()
  const onClick = () => {
    logout().then(() => navigate(routes.home))
  }
  return (
    <button onClick={() => onClick()}>Sign Out</button>
  )
}

export default SignoutBtn
