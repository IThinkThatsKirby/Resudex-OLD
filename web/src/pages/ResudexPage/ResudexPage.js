import { currentUser } from 'netlify-identity-widget'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BcardsCell from 'src/components/Bcard/BcardsCell'

const ResudexPage = () => {
  return (
    // <>
    //   <MetaTags title="Resudex" description="Resudex page" />

    //   <h1>
    //     <Link to={routes.resudex()}>My Resudex</Link>
    //   </h1>
    <BcardsCell />
    // </>
  )
}

export default ResudexPage
