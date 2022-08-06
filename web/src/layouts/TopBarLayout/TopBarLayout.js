// import 'material-dynamic-colors'
// import 'beercss'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'

const TopBarLayout = ({ children }) => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <header className="padding primary">
        <div className="row no-wrap middle-align">
          <button className="circle">
            <i>menu</i>
            <div className="dropdown right no-wrap">
              <a href="/panning">NEW Resumes</a>
              <a href="/sifter">Your Resudex</a>
              <a>Coming Soon!</a>
            </div>
          </button>
          <div className="col">
            <h5 className="no-margin">🗂️ | Resudex</h5>
          </div>
          <div className="navBarContainer">
          <ul className="navBarList">
          <li><button className="signUp"><Link to={routes.signup()}>Sign Up</Link></button></li>
          <li><button className="signIn"><Link to={routes.signin()}>Sign In</Link></button></li>
          </ul>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </>
  )
}

export default TopBarLayout
