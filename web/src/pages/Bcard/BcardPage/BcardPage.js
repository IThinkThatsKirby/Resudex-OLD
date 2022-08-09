import BcardCell from 'src/components/Bcard/BcardCell'

const BcardPage = ({ id }) => {
  return (
    <article className="responsive">
      <BcardCell id={id} />
    </article>
  )
}

export default BcardPage
