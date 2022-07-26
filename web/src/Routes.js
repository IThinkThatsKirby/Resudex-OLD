// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'

import GlobalLayout from './layouts/GlobalLayout/GlobalLayout'
import HomePage from './pages/HomepagePage/HomepagePage'
const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="newSession">
        <Set wrap={GlobalLayout}>
          <Route path="/user-resudexes/new" page={UserResudexNewUserResudexPage} name="newUserResudex" />
          <Route path="/user-resudexes/{id:Int}/edit" page={UserResudexEditUserResudexPage} name="editUserResudex" />
          <Route path="/user-resudexes/{id:Int}" page={UserResudexUserResudexPage} name="userResudex" />
          <Route path="/user-resudexes/{netlify_id:String}" page={UserResudexUserResudexesPage} name="userResudexes" />
          <Route path="/user/resudex" page={ResudexPage} name="resudex" />
          <Route path="/homepage" page={HomePage} name="homePage" />
          <Route path="/bcards/new" page={BcardNewBcardPage} name="newBcard" />
          <Route path="/bcards/{id:Int}/edit" page={BcardEditBcardPage} name="editBcard" />
          <Route path="/bcards/{id:Int}" page={BcardBcardPage} name="bcard" />
          <Route path="/bcards" page={BcardBcardsPage} name="bcards" />
        </Set>
      </Private>
      <Route path="/newsession" page={NewSessionPage} name="newSession" />
      <Route path="/" page={NewSessionPage} name="newSession" />
      <Route notfound page={NewSessionPage} />
    </Router>
  )
}

export default Routes
