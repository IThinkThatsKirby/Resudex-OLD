import { Form, TextField, Submit, NumberField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import 'src/index.css'
const FormPage = () => {
  const onSubmit = (data) => {
    // push info to DB here.
  }
  return (
    <>
      <MetaTags title="Form" description="Form page" />
      <div className="formContainer">
      <h1 className="formTitle">Form | Resume</h1>

      <Form className="userInputForm">
        <TextField name="name" placeholder="name" />
        <TextField name="email" placeholder="email" />
        <TextField name="jobTitle" placeholder="Job Title" />
        <TextField name="jobExp" placeholder="Work Experience" />
        <TextField name="yrsInIndustry" placeholder="Total years worked in tech"/>
        <TextField name="education" placeholder="Education" />
        <Submit className="SubmitBtn">Submit</Submit>
      </Form>
</div>
    </>
  )
}

export default FormPage
