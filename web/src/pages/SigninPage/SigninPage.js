import { useAuth } from '@redwoodjs/auth'
import { PasswordField, TextField, Form, Submit } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SigninPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = React.useState(null)
  const onSubmit = (data) => {
    setError(null)
    logIn({ email: data.email, password: data.password, remember: true })
      .then(() => navigate(routes.homepage()))
      .catch((error) => setError(error.message))
  }
  return (
    <>
      <MetaTags title="Signin" description="Signin page" />
      <article className="border medium no-padding">
        <div className="padding primary absolute center middle">
          <h5>Sign In!</h5>
          <div className="space">
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
