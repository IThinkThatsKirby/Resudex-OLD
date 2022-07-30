import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, Submit } from '@redwoodjs/forms'
const FormPage = () => {
  return (
    <>
      <MetaTags title="Form" description="Form page" />

      <h1>Form | Resume</h1>
      <Form>
      <TextField name="name" placeholder="name"/>
      <TextField name="email" placeholder="email"/>
      <TextField name="jobTitle" placeholder="Job Title"/>
      <TextField name="" placeholder=""/>
      <TextField name="" placeholder=""/>

      <Submit>Submit</Submit>
      </Form>
    </>
  )
}

export default FormPage
