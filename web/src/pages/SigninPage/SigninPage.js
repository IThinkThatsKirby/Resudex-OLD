import { useAuth } from '@redwoodjs/auth'
import { PasswordField, TextField, Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SigninPage = () => {
  const [error, setError] = React.useState(null)
  const { logIn } = useAuth()
  const onSubmit = (data) => {
    setError(null)
    logIn({ email: data.email, password: data.password, remember: true })
      .then(() => navigate(routes.home))
      .catch((error) => setError(error.message))
  }

  return (
    <>
      <MetaTags title="Signin" description="Signin page" />

      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign In</Submit>
      </Form>
    </>
  )
}

export default SigninPage
