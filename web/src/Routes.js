// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'

import BcardsLayout from './layouts/BcardsLayout/BcardsLayout'
import GlobalLayout from './layouts/GlobalLayout/GlobalLayout'
import HomepagePage from './pages/HomepagePage/HomepagePage'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Private unauthenticated="newSession">
        <Set wrap={GlobalLayout}>
          <Route path="/homepage" page={HomepagePage} name="homepage" />
        </Set>
      </Private>
      <Route path="/newsession" page={NewSessionPage} name="newSession" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
