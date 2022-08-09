import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'

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
      <h1 className="center-align small-padding">Sign Up</h1>
      <Form className="center-align" onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField
          className="field  small round"
          name="email"
          placeholder="email"
        />
        <PasswordField
          className="field password small round"
          name="password"
          placeholder="password"
        />
        <Submit>Sign Up</Submit>
      </Form>
    </article>
  )
}

export default SignupPage
