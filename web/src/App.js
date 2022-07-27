import { AuthProvider } from '@redwoodjs/auth'
import GoTrue from 'gotrue-js'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const goTrueClient = new GoTrue({
  APIUrl: 'https://MYAPP.netlify.app/.netlify/identity', // needs to be changed- gonna let Kirby make the account for it
  setCookie: true,
})

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider client={goTrueClient} type="goTrue">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
