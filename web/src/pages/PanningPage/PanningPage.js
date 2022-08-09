import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BCard from 'src/components/BCard/BCard'
import BcardsCell from 'src/components/Bcard/BcardsCell'

const PanningPage = () => {
  return (
    <>
      <MetaTags title="Panning" description="Panning page" />

      <BcardsCell />
    </>
  )
}

export default PanningPage
