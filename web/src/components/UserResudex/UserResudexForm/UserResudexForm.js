import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const UserResudexForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.userResudex?.id)
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
          name="netlify_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Netlify id
        </Label>

        <TextField
          name="netlify_id"
          defaultValue={props.userResudex?.netlify_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="netlify_id" className="rw-field-error" />

        <Label
          name="bcard_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bcard id
        </Label>

        <NumberField
          name="bcard_id"
          defaultValue={props.userResudex?.bcard_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="bcard_id" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserResudexForm
