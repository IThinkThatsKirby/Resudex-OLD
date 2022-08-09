import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'

const Navigation = () => {
  const { isAuthenticated } = useAuth()
  return (
    <nav>
      {isAuthenticated ? (
        <header className="primary responsive small-padding">
          <nav>
            <button className="secondary-container circle button">
              <i>menu</i>
              <li className="dropdown no-wrap secondary round">
                <a href="/panning">NEW Resumes</a>
                <a href="/sifter">Your Resudex</a>
              </li>
            </button>
            <h5 className="max center-align">🗂️ | Resudex</h5>
            <SignoutBtn />
          </nav>
        </header>
      ) : (
        <>
          <header className="primary responsive small-padding">
            <nav>
              <button className="secondary-container circle button">
                <i>menu</i>
                <li className="dropdown no-wrap secondary round">
                  <a href="/panning">NEW Resumes</a>
                  <a href="/sifter">Your Resudex</a>
                </li>
              </button>
              <h5 className="max center-align">🗂️ | Resudex</h5>
              <Link to={routes.signup()}>
                <button className="signUp">Sign Up </button>
              </Link>
              <Link to={routes.signin()}>
                <button className="signIn">Sign In </button>
              </Link>
            </nav>
          </header>
        </>
      )}
    </nav>
  )
}

export default Navigation
