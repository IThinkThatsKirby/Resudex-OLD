import { currentUser } from 'netlify-identity-widget'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'

import SigninBtn from '../SigninBtn/SigninBtn'

const Navigation = () => {
  const { isAuthenticated } = useAuth()
  const cUser = currentUser().user_metadata.full_name
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
            <p>Howdy {cUser}!</p>
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
              <SigninBtn />
            </nav>
          </header>
        </>
      )}
    </nav>
  )
}

export default Navigation
