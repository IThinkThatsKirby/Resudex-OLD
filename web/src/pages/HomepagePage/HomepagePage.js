const HomePage = () => {
  return (
    <>
      <article>
        <p>
          Hello and Welcome to Resudex! to begin please create a new card by
          using the button below! Want to see some cards and maybe find a new
          hire? use the "view dem cards" button!
        </p>
        <a className="button center row" href="/bcards/new">
          Create a business card
        </a>
        <a className="button center row" href="/bcards">
          vew dem cards
        </a>
      </article>
    </>
  )
}

export default HomePage
