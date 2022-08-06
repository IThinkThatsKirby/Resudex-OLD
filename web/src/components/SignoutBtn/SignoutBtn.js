import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import 'src/index.css'
const SignoutBtn = () => {
  const { logOut } = useAuth()
  const onClick = () => {
    logout().then(() => navigate(routes.home))
  }
<<<<<<< HEAD
  return <button className="signOutBtn" onClick={() => onClick()}>Sign Out</button>
=======

  return (
    <button class="extend circle large" onClick={() => onClick()}>Sign Out</button>
  )

>>>>>>> fd3139f5a75370c08e8fe99f11320f2445513a60
}

export default SignoutBtn
