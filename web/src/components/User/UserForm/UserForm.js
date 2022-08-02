import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.user?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="jobTitle"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Job title
        </Label>

        <TextField
          name="jobTitle"
          defaultValue={props.user?.jobTitle}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="jobTitle" className="rw-field-error" />

        <Label
          name="jobExp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Job exp
        </Label>

        <NumberField
          name="jobExp"
          defaultValue={props.user?.jobExp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="jobExp" className="rw-field-error" />

        <Label
          name="yearsInIndustry"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Years in industry
        </Label>

        <NumberField
          name="yearsInIndustry"
          defaultValue={props.user?.yearsInIndustry}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="yearsInIndustry" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
