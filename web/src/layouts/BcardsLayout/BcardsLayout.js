import { Link, routes } from '@redwoodjs/router'

// import { Toaster } from '@redwoodjs/web/toast'
import Navigation from 'src/components/Navigation/Navigation'
const BcardsLayout = ({ children }) => {
  return (
    <header className="primary responsive small-padding">
      <Navigation />
      <Link to={routes.bcards()} className="button">
        Bcards
      </Link>

      <Link to={routes.newBcard()} className="button">
        <div className="rw-button-icon">+</div> New Bcard
      </Link>

      <main className="rw-main">{children}</main>
    </header>
  )
}

export default BcardsLayout
