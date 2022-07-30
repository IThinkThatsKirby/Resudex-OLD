// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'


import TopBarLayout from 'src/layouts/TopBarLayout/TopBarLayout'
const Routes = () => {
  return (
    <Router>

      <Set wrap={TopBarLayout}>
      <Private unauthenticated="login" roles={['employer', 'employee']}>
        <Route path="/form" page={FormPage} name="form" />
      </Private>
        <Route path="/form" page={FormPage} name="form" />
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
