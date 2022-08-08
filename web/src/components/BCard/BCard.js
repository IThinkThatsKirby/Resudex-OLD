// import 'web/src/index.css'

// former beercss -- https://hastebin.com/izuzofupem.js
const BCard = (data) => {
  return (
    <article className="border round primary-container">
      <div className="row padding">
        <div className="max">
          <h5 className="bold">Name</h5>
          <div>
            <h4>Work Exp</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div>
            <h4>Code Projects</h4>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
      <nav>
        <button className="round green column">yas</button>
        <button className="round red column">nah</button>
      </nav>
    </article>
  )
}

export default BCard
