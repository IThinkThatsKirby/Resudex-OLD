import { useAuth } from '@redwoodjs/auth'
import { ButtonField } from '@redwoodjs/forms'
import { Redirect, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewSessionPage = () => {
  const { logIn, signUp, isAuthenticated } = useAuth()
  const SomePage = () => <Redirect to={routes.homepage()} />
  const up = () => {
    signUp().then(() => navigate(routes.homepage()))
  }
  return (
    <div>
      <MetaTags title="NewSession" description="Login or Signup page" />
      {isAuthenticated ? (
        SomePage()
      ) : (
        <>
          <article className="responsive border deep-purple3">
            <h1 className="center-align bold">Welcome to your Resudex</h1>
            <h2 className="center-align">Create, Save, and Search Resumes</h2>
            <div className="center-align responsive">
              <button onClick={() => up()} className="purple1 black-text">Sign up</button>
              <button onClick={useAuth().logIn} class="purple1 black-text">Login</button>
            </div>
          </article>
          <div className="center-align">
            tutorial and selling points go here
          </div>
        </>
      )}
    </div>
  )
}

export default NewSessionPage
