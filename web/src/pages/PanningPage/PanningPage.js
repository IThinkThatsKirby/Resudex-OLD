import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BCard from 'src/components/BCard/BCard'

const PanningPage = () => {
  return (
    <>
      <MetaTags title="Panning" description="Panning page" />

      <BCard />
    </>
  )
}

export default PanningPage
