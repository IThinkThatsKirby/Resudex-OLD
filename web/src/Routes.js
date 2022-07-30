// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import JobPostsLayout from 'src/layouts/JobPostsLayout'

import UsersLayout from 'src/layouts/UsersLayout'

import TopBarLayout from 'src/layouts/TopBarLayout/TopBarLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={JobPostsLayout}>
        <Route path="/job-posts/new" page={JobPostNewJobPostPage} name="newJobPost" />
        <Route path="/job-posts/{id:Int}/edit" page={JobPostEditJobPostPage} name="editJobPost" />
        <Route path="/job-posts/{id:Int}" page={JobPostJobPostPage} name="jobPost" />
        <Route path="/job-posts" page={JobPostJobPostsPage} name="jobPosts" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={TopBarLayout}>
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
