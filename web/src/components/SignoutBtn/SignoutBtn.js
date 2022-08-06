import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import 'src/index.css'
const SignoutBtn = () => {
  const { logOut } = useAuth()
  const onClick = () => {
    logout().then(() => navigate(routes.home))
  }
  return <button className="signOutBtn" onClick={() => onClick()}>Sign Out</button>
}

export default SignoutBtn
