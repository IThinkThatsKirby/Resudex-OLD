// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import TopBarLayout from 'src/layouts/TopBarLayout/TopBarLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={TopBarLayout}>
        <Route path="/panning" page={PanningPage} name="panning" />
        <Route path="/" page={NewSessionPage} name="newSession" />
        <Route path="/sifter" page={SifterPage} name="sifter" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
