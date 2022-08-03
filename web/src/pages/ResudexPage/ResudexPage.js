import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ResudexPage = () => {
  return (
    <>
      <MetaTags title="Resudex" description="Resudex page" />

      <h1>ResudexPage</h1>

      <p>
        Find me in
        <code>./web/src/pages/ResudexPage/ResudexPage.js</code>
      </p>

      <p>
        My default route is named
        <code>resudex</code>, link to me with `
        <Link to={routes.resudex()}>Resudex</Link>`
      </p>
    </>
  )
}

export default ResudexPage
