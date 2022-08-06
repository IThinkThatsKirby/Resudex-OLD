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
import UsersLayout from 'src/layouts/UsersLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
        <Route path="/user/resudex" page={ResudexPage} name="resudex" />
      </Set>

      <Set wrap={TopBarLayout}>
        <Private unauthenticated="login" roles={['employer', 'employee']}>
          <Route path="/form" page={FormPage} name="form" />
        </Private>
        <Route path="/homepage" page={HomepagePage} name="homepage" />
        <Route path="/signin" page={SigninPage} name="signin" />
        <Route path="/signup" page={SignupPage} name="signup" />

        <Route path="/panning" page={PanningPage} name="panning" />
        <Route path="/" page={NewSessionPage} name="newSession" />
        <Route path="/sifter" page={SifterPage} name="sifter" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
