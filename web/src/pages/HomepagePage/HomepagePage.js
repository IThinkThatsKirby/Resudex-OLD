import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const HomePage = () => {
  return (
    <GlobalLayout>
      <div className="heroContainer">
        <button class="extend circle large" className="siftRoute" onclick="navigate(routes.Panning)">
          Begin Searching!
        </button>
      </div>
    </GlobalLayout>
  )
}

export default HomePage
