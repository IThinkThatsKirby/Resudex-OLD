import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserResudex/UserResudexesCell'

const DELETE_USER_RESUDEX_MUTATION = gql`
  mutation DeleteUserResudexMutation($id: Int!) {
    deleteUserResudex(id: $id) {
      id
    }
  }
`

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

const UserResudexesList = ({ userResudexes }) => {
  const [deleteUserResudex] = useMutation(DELETE_USER_RESUDEX_MUTATION, {
    onCompleted: () => {
      toast.success('UserResudex deleted')
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
  //saved for later
  // //              <button
  //                 type="button"
  //                 title={'Delete userResudex ' + userResudex.id}
  //                 className="rw-button rw-button-small rw-button-red"
  //                 onClick={() => onDeleteClick(userResudex.id)}
  //               >
  //                 Delete
  //               </button>
  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete userResudex ' + id + '?')) {
      deleteUserResudex({ variables: { id } })
    }
  }
  console.log(userResudexes)
  return (
    <div className="center-align">
      <p>You Resudex</p>
      <article className="red2">
        <div className="grid max space">
          {userResudexes.map((userResudexe) => (
            <div className="s5 red3 large-elevate" key={userResudexe.bcard.id}>
              <div className="grid">
                <div className="s2">
                  <img
                    className=""
                    alt="business card"
                    src={userResudexe.bcard.selfie}
                  />
                </div>
                <div className="s9">
                  <div className="small-padding">
                    <h4 className="center-align bold">
                      {userResudexe.bcard.name}
                    </h4>
                    <h6 className="center-align">
                      {userResudexe.bcard.profession}
                    </h6>
                    <div className="grid">
                      <div className="s6 large-elevate small-padding">
                        <ul>
                          <div className="bold underline">Skills</div>
                          <p>
                            {userResudexe.bcard.specialization1} -{' '}
                            {userResudexe.bcard.specialization1exp}yr
                          </p>
                          <p>
                            {userResudexe.bcard.specialization2} -{' '}
                            {userResudexe.bcard.specialization1exp}yr
                          </p>
                          <p>
                            {userResudexe.bcard.specialization3} -{' '}
                            {userResudexe.bcard.specialization1exp}yr
                          </p>
                        </ul>
                      </div>
                      <div className="s3 small-padding">
                        <ul>
                          <div className="bold">References:</div>
                          <p>{userResudexe.bcard.spreference1}</p>
                          <p>{userResudexe.bcard.spreference2}</p>
                          <p>{userResudexe.bcard.spreference3}</p>
                        </ul>
                      </div>
                    </div>
                    <nav>
                      {' '}
                      <Link
                        to={routes.editBcard({ id: userResudexe.bcard.id })}
                        className="button"
                      >
                        Edit
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}

export default UserResudexesList
