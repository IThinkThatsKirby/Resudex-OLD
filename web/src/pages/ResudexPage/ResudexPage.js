import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import BcardCell from 'src/components/Bcard/BcardCell'
import { currentUser } from 'netlify-identity-widget'

const cUser = currentUser()
console.log(cUser.id, cUser.user_metadata.full_name)
const ResudexPage = () => {
  return (
    <>
      <MetaTags title="Resudex" description="Resudex page" />

      <h1><Link to={routes.resudex()}>My Resudex</Link></h1>
        <BcardCell />
    </>
 )
}

export default ResudexPage
