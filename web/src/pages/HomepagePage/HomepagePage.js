import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const HomePage = () => {
  return (
    <>
      <article>
        <a className="button responsive" href="/form">
          Create a buisness card
        </a>
        <a className="button responsive" href="/panning">
          vew dem cards
        </a>
      </article>
    </>
  )
}

export default HomePage
