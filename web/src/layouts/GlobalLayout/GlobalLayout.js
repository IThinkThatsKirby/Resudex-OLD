import Footer from 'src/components/Footer/Footer'
import Navigation from 'src/components/Navigation/Navigation'
const GlobalLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="small-padding red1 responsive">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default GlobalLayout
