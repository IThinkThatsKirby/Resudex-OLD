// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'

import TopBarLayout from 'src/layouts/TopBarLayout/TopBarLayout'
// import UsersLayout from 'src/layouts/UsersLayout'

import NewBcard from './components/BCard/NewBcard/NewBcard'
import HomePage from './pages/HomepagePage/HomepagePage'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Set wrap={TopBarLayout}>
        <Private unauthenticated="signin">
          <Route path="/newbcard" page={NewBcard} name="newbcard" />
        </Private>
        <Route path="/homepage" page={HomePage} name="homepage" />
        <Route path="/signin" page={SigninPage} name="signin" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Private unauthenticated="signin">
          <Route path="/panning" page={PanningPage} name="panning" />
          <Route path="/" page={NewSessionPage} name="newSession" />
          <Route path="/sifter" page={SifterPage} name="sifter" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
