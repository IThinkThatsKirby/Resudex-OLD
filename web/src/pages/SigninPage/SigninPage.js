import { useAuth } from '@redwoodjs/auth'
import { PasswordField, TextField, Form, Submit } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SigninPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    logIn({ email: data.email, password: data.password, remember: true })
      .then(() => navigate(routes.home()))
      .catch((error) => setError(error.message))
  }
  return (
    <>
      <MetaTags title="Signin" description="Signin page" />
      <article className="border medium no-padding">
        <div className="padding primary absolute center middle">
          <h5>Sign In!</h5>
          <div className="signInContainer space">
            <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
              {error && <p>{error}</p>}
              <div className="field label border fill">
                <TextField name="email" placeholder="email" />
              </div>
              <div className="field label border fill">
                <PasswordField name="password" placeholder="password" />
              </div>
              <Submit class="responsive round fill">Sign In</Submit>
            </Form>
          </div>
        </div>
      </article>
    </>
  )
}

export default SigninPage
