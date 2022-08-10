import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  TextField,
  PasswordField,
  Submit,
  EmailField,
} from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    client
      .signup(data.email, data.password)
      .then(() => navigate(routes.signin()))
      .catch((error) => setError(error.message))
  }

  return (
    <article>
      <MetaTags title="Signin" description="Signin page" />
      <h1 className="center-align small-padding">Sign Up</h1>
      <Form className="center-align" onSubmit={onSubmit}>
        {error && (
          <div className="round yellow">
            {error}
            <button className="large-elevate fill blue small">
              Did you want to sign in?
            </button>
          </div>
        )}
        <div className="center-align responsive no-padding">Email</div>
        <EmailField
          className="field responsive center-align small round"
          name="email"
          placeholder="email"
        />
        <div className="center-align responsive no-padding">Password</div>
        <PasswordField
          className="field center-align responsive password small round"
          name="password"
          placeholder="password"
        />
        <Submit className="responsive">Sign Up</Submit>
      </Form>
    </article>
  )
}

export default SignupPage
