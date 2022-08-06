import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'
import 'src/index.css'
const Navigation = () => {
  const { isAuthenticated } = useAuth()
  return (
    <nav>
      {isAuthenticated ? (
        <SignoutBtn />
      ) : (
        <>
        <div className="navBarContainer">
          <ul className="navBarList">
          <li><button className="signUp"><Link to={routes.signup()}>Sign Up</Link></button></li>
          <li><button className="signIn"><Link to={routes.signin()}>Sign In</Link></button></li>
          </ul>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navigation