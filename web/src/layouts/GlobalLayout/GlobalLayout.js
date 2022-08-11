import Navigation from 'src/components/Navigation/Navigation'
import Footer from 'src/components/Footer/Footer'
const GlobalLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="small-padding">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default GlobalLayout
