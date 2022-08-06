import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import BCard from 'src/components/BCard/BCard'

const PanningPage = () => {
  return (
    <>
      <MetaTags title="Panning" description="Panning page" />

      <h1>PanningPage</h1>
      <h2>
        you will sift threw resumes matching basic qualifying descriptions.
      </h2>
      <BCard />
    </>
  )
}

export default PanningPage
