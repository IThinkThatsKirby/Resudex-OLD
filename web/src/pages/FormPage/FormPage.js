import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, TextField, Submit } from '@redwoodjs/forms'
const FormPage = () => {
  const onSubmit = (data) => {
    // push info to DB here.
  }
  return (
    <>
      <MetaTags title="Form" description="Form page" />

      <h1>Form | Resume</h1>
      <Form>
      <TextField name="name" placeholder="name"/>
      <TextField name="email" placeholder="email"/>
      <TextField name="jobTitle" placeholder="Job Title"/>
      <TextField name="jobExp" placeholder="Work Experience"/>
      <TextField name="yrsInIndustry" placeholder="Total years worked in tech"/>
      <TextField name="education" placeholder="Education" />
      <Submit>Submit</Submit>
      </Form>
    </>
  )
}

export default FormPage
