import humanize from 'humanize-string'
import { currentUser } from 'netlify-identity-widget'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import QUERY from 'src/components/Bcard/BcardsCell'
import FavBtn from 'src/components/FavBtn/FavBtn'
const DELETE_BCARD_MUTATION = gql`
  mutation DeleteBcardMutation($id: Int!) {
    deleteBcard(id: $id) {
      id
    }
  }
`
const cUserID = currentUser().id

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const BcardsList = ({ bcards }) => {
  const [deleteBcard] = useMutation(DELETE_BCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Bcard deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bcard ' + id + '?')) {
      deleteBcard({ variables: { id } })
    }
  }

  return (
    <article className="red2">
      <div className="grid max space">
        {bcards.map((bcard) => (
          <div className="s5 red3 large-elevate" key={bcard.id}>
            <div className="grid">
              <div className="s2">
                <img className="" alt="business card" src={bcard.selfie} />
              </div>
              <div className="s9">
                <div className="small-padding">
                  <h4 className="center-align bold">{bcard.name}</h4>
                  <h6 className="center-align">{bcard.profession}</h6>
                  <div className="grid">
                    <div className="s6 large-elevate small-padding">
                      <ul>
                        <div className="bold">Skills:</div>
                        <p>
                          {bcard.specialization1} - {bcard.specialization1exp}yr
                        </p>
                        <p>
                          {bcard.specialization2} - {bcard.specialization1exp}yr
                        </p>
                        <p>
                          {bcard.specialization3} - {bcard.specialization1exp}yr
                        </p>
                      </ul>
                    </div>
                    <div className="s3 small-padding">
                      <ul>
                        <div className="bold">References:</div>
                        <p>{bcard.spreference1}</p>
                        <p>{bcard.spreference2}</p>
                        <p>{bcard.spreference3}</p>
                      </ul>
                    </div>
                  </div>
                  <nav>
                    <FavBtn bcard_id={bcard.id} netlify_id={cUserID} />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

export default BcardsList
