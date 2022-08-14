import netlifyIdentity from 'netlify-identity-widget'

import { AuthProvider } from '@redwoodjs/auth'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import 'beercss'
import 'material-dynamic-colors'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
// import './scaffold.css'
// import './index.css'

isBrowser && netlifyIdentity.init()
const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <RedwoodApolloProvider>
        <AuthProvider client={netlifyIdentity} type="netlify">
          <Routes />
        </AuthProvider>
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
