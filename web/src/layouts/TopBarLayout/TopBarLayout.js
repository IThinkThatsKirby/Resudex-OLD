// import 'material-dynamic-colors'
// import 'beercss'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

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
              <li>
                <Link to={routes.signup()}>
                  <button className="signUp">Sign Up </button>
                </Link>
              </li>
              <li>
                <Link to={routes.signin()}>
                  <button className="signIn">Sign In </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </>
  )
}

export default TopBarLayout
