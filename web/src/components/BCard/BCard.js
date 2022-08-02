const BCard = () => {
  return (
    <article className="round">
      <div className="row no-wrap">
        <div className="col min">
          <img
            className="circle large"
            alt="Pretty"
            src="/beer-and-woman.jpg"
          ></img>
        </div>
        <div className="col">
          <h5 className="no-margin">Title</h5>
          <div>Complementary text</div>
        </div>
      </div>
      <nav>
        <button className="none">NAH FAM</button>
        <button className="none">YAS QUEEN</button>
      </nav>
    </article>
  )
}

export default BCard
