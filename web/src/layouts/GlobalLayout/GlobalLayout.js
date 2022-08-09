import Navigation from 'src/components/Navigation/Navigation'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="small-padding">
        <main>{children}</main>
      </div>
    </>
  )
}

export default GlobalLayout
