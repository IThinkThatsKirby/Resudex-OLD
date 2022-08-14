import { currentUser } from 'netlify-identity-widget'

import { Link, routes } from '@redwoodjs/router'

import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'

const Navigation = () => {
  const cUser = currentUser()
  return (
    <header className="primary row responsive no-padding">
      <nav className="top-shadow responsive">
        <Link
          to={routes.newBcard()}
          className="button green"
          href="/bcards/new"
        >
          Create a new Resume
        </Link>
        <Link to={routes.bcards()} className="button orange" href="/bcards">
          Browse New Resumes
        </Link>
        <h4 className="center-align max">🗂️ | Resudex</h4>
        <h6>Howdy {cUser.user_metadata.full_name}!</h6>
        <Link
          to={routes.userResudexes({ netlify_id: cUser.id })}
          className="button pink"
        >
          Your Resudex
        </Link>
        <SignoutBtn />
      </nav>
    </header>
  )
}

export default Navigation
