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
        <h2 className="cardName">Ed Shizenboker</h2>
          <div className="cardExperience">
            <h5>💼 | Industry Experience </h5>
            <ul  className="experienceList">
              <li>Worked at Facebook / META</li>
              <li>Worked at Twitter</li>
              <li>Worked at Arby's</li>
            </ul>
          </div>
          <div className="cardProjects">
            <h5>🔗 | Projects Showcase</h5>
            <ul className="projectsList">
              <li>https://github.com/wangeditor-team/wangEditor</li>
              <li>https://github.com/wangeditor-team/wangEditor-for-react</li>
              <li>https://github.com/wangeditor-team/wangEditor-for-vue</li>
            </ul>
          </div>
        <button className="nahButton">NAH FAM</button>
        <button className="yasButton">YAS QUEEN</button>
        </div>
    </article>
  )
}

export default BCard
