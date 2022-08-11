import { useAuth } from '@redwoodjs/auth'
import { ButtonField } from '@redwoodjs/forms'
import { Redirect, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Hero from 'src/components/Hero/Hero'
const NewSessionPage = () => {
  const { logIn, signUp, isAuthenticated } = useAuth()
  const SomePage = () => <Redirect to={routes.homepage()} />

  return (
    <div>
      <MetaTags title="NewSession" description="Login or Signup page" />
      {isAuthenticated ? (
        SomePage()
      ) : (
        <>
          <article className="responsive border deep-purple3">
            <h1 className="center-align">Welcome to your Resudex</h1>
            <h2 className="center-align">Create, Save, and Search Resumes</h2>
            <div className="center-align responsive">
              <button
                onClick={signUp}
                className="purple1 border fill black-text"
              >
                SIGN UP
              </button>
              <button
                onClick={logIn}
                className="purple1 border fill black-text"
              >
                LOGIN
              </button>
            </div>
          </article>
          <div className="center-align">
          </div>
          <Hero />
        </>
      )}
    </div>
  )
}

export default NewSessionPage
