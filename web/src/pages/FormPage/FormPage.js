import { Form, TextField, Submit, NumberField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FormPage = () => {
  const onSubmit = (data) => {
    // push info to DB here.
  }
  return (
    <>
      <MetaTags title="Form" description="Form page" />

      <h1>Form | Resume</h1>
      <Form onSubmit={onSubmit}>
      <TextField name="name" placeholder="name"/>
      <TextField name="email" placeholder="email"/>
      <TextField name="jobTitle" placeholder="Job Title"/>
      <TextField name="jobExp" placeholder="Work Experience"/>
      <NumberField name="yrsInIndustry" placeholder="Total years worked in tech"/>
      <TextField name="education" placeholder="Education" />
      <Submit>Submit</Submit>
      </Form>
    </>
  )
}

export default FormPage
