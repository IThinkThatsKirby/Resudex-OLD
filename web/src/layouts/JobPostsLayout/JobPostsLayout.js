import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const JobPostsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.jobPosts()} className="rw-link">
            JobPosts
          </Link>
        </h1>

        <Link to={routes.newJobPost()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New JobPost
        </Link>
      </header>

      <main className="rw-main">{children}</main>
    </div>
  )
}

export default JobPostsLayout
