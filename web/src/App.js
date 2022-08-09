import GoTrue from 'gotrue-js'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import 'beercss'
import 'material-dynamic-colors'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './scaffold.css'
import './index.css'

const goTrueClient = new GoTrue({
  APIUrl: env('GOTRUE_SITE_URL'),
  setCookie: true,
})

function App() {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <AuthProvider client={goTrueClient} type="goTrue">
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </FatalErrorBoundary>
  )
}

export default App
