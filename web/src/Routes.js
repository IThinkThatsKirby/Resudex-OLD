// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import BcardsLayout from 'src/layouts/BcardsLayout'
import GlobalLayout from './layouts/GlobalLayout/GlobalLayout'
import HomepagePage from './pages/HomepagePage/HomepagePage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BcardsLayout}></Set>
      <Private unauthenticated="newSession">
        <Set wrap={GlobalLayout}>
          <Route path="/homepage" page={HomepagePage} name="homepage" />
          <Route path="/bcards/new" page={BcardNewBcardPage} name="newBcard" />
          <Route path="/bcards/{id:Int}/edit" page={BcardEditBcardPage} name="editBcard" />
          <Route path="/bcards/{id:Int}" page={BcardBcardPage} name="bcard" />
          <Route path="/bcards" page={BcardBcardsPage} name="bcards" />
        </Set>
      </Private>
      <Route path="/newsession" page={NewSessionPage} name="newSession" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
