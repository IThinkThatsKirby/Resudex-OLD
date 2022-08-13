import UserResudexesCell from 'src/components/UserResudex/UserResudexesCell'

const UserResudexesPage = (netlify_id) => {
  console.log(netlify_id.netlify_id)
  const x = netlify_id.netlify_id
  console.log(typeof x)
  return <UserResudexesCell netlify_id={netlify_id.netlify_id} />
}

export default UserResudexesPage
