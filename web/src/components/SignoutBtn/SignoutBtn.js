import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const SignoutBtn = () => {
  const { logOut } = useAuth()

  const onClick = () => {
    logOut().then(() => navigate(routes.newSession()))
  }

  return (
    <button className="blue" onClick={() => onClick()}>
      Sign Out
    </button>
  )
}

export default SignoutBtn
