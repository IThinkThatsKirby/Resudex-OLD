import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SifterPage = () => {
  return (
    <>
      <MetaTags title="Sifter" description="Sifter page" />

      <h1>SifterPage</h1>

      <p>
        Find me in
        <code>./web/src/pages/SifterPage/SifterPage.js</code>
      </p>

      <p>
        My default route is named
        <code>sifter</code>, link to me with `
        <Link to={routes.sifter()}>Sifter</Link>`
      </p>
    </>
  )
}

export default SifterPage
