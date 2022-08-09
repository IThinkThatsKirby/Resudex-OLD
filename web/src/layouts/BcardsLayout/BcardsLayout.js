import { Link, routes } from '@redwoodjs/router'
// import { Toaster } from '@redwoodjs/web/toast'

const BcardsLayout = ({ children }) => {
  return (
    <header className="primary responsive small-padding">
      <Link to={routes.bcards()} className="rw-link">
        Bcards
      </Link>

      <Link to={routes.newBcard()} className="rw-button rw-button-green">
        <div className="rw-button-icon">+</div> New Bcard
      </Link>

      <main className="rw-main">{children}</main>
    </header>
  )
}

export default BcardsLayout
