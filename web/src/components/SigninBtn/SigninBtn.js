import { useAuth } from '@redwoodjs/auth'
const SigninBtn = () => {
  const { logIn } = useAuth()
  return (
    <button className="signIn" onClick={logIn}>
      Signup or Signin
    </button>
  )
}

export default SigninBtn
