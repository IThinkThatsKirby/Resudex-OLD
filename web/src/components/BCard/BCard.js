import 'web/src/index.css'
const BCard = (data) => {
  return (
    <article className="round">
        <div className="col min">
          <img
            className="circle large"
            alt="Pretty"
            src="/beer-and-woman.jpg"
          ></img>
        </div>
        <div className="userJobInfoContainer">
        <h2 className="cardName">NAME</h2>
          <div className="cardExperience">
            <h5>💼 | Industry Experience </h5>
            <ul  className="experienceList">
              <li>EXP 1</li>
              <li>EXP 2</li>
              <li>EXP 3</li>
            </ul>
          </div>
          <div className="cardProjects">
            <h5>🔗 | Projects Showcase</h5>
            <ul className="projectsList">
              <li>Project 1</li>
              <li> Project 2</li>
              <li>Project 3</li>
            </ul>
          </div>
        <button className="nahButton">NAH FAM</button>
        <button className="yasButton">YAS QUEEN</button>
        </div>
    </article>
  )
}

export default BCard
