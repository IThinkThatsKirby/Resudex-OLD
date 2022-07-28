import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import {useAuth } from '@redwoodjs/auth'

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = react.useState(null)
  const onSubmit = (data) => {
    setError(null)
    client
    .signup(data.email, data.password)
    .then(() => navigate(routes.signin()))
    .catch ((error) => console.log(error))

  }
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}
      {error && <p>{error}</p>}
      <TextField name="email" placeholder="email"/>
      <PasswordField name="password" placeholder="password" />
      <Submit>Sign Up</Submit>
      </Form>
  )
}

export default SignupPage
