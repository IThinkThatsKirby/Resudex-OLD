import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const HomePage = () => {
  return (
    <GlobalLayout>
        <button class="extend circle large" className="panRoute" onclick="navigate(routes.Panning)">
          Begin Searching!
        </button>
    </GlobalLayout>
  )
}

export default HomePage
