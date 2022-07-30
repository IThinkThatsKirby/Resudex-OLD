// import 'material-dynamic-colors'
// import 'beercss'

const TopBarLayout = ({ children }) => {
  return (
    <>
      <header className="padding primary">
        <div className="row no-wrap middle-align">
          <button className="circle">
            <i>menu</i>
            <div className="dropdown right no-wrap">
              <a href="/panning">NEW Resumes</a>
              <a href="/sifter">Your Resudex</a>
              <a>Item 3</a>
            </div>
          </button>
          <div className="col">
            <h5 className="no-margin">Title large</h5>
          </div>
          <div className="col min">
            <a>
              <i>attach_file</i>
            </a>
          </div>
          <div className="col min">
            <a>
              <i>today</i>
            </a>
          </div>
          <div className="col min">
            <a>
              <i>more_vert</i>
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default TopBarLayout
