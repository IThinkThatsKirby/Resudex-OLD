import { currentUser } from 'netlify-identity-widget'

import BcardsCell from 'src/components/Bcard/BcardsCell'

const BcardsPage = ({ userBcards }) => {
  const x = currentUser().id
  return <BcardsCell userBcards={x} />
}

export default BcardsPage
