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
      <Set wrapper={BcardsLayout}>
        <Private unauthenticated="/">
          <Route path="/bcards/new" page={BcardNewBcardPage} name="newBcard" />
          <Route path="/bcards/{id:Int}/edit" page={BcardEditBcardPage} name="editBcard" />
          <Route path="/bcards/{id:Int}" page={BcardBcardPage} name="bcard" />
          <Route path="/bcards" page={BcardBcardsPage} name="bcards" />
        </Private>
      </Set>
      <Set wrap={GlobalLayout}>
        <Route path="/homepage" page={HomepagePage} name="homepage" />

        <Route path="/" page={NewSessionPage} name="newSession" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
