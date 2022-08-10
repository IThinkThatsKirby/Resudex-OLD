import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const BcardForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.bcard?.id)
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

        <NumberField
          name="netlify_id"
          defaultValue={props.bcard?.netlify_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="netlify_id" className="rw-field-error" />

        <Label
          name="cell_number"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cell number
        </Label>

        <TextField
          name="cell_number"
          defaultValue={props.bcard?.cell_number}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="cell_number" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.bcard?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.bcard?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="profession_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profession id
        </Label>

        <NumberField
          name="profession_id"
          defaultValue={props.bcard?.profession_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="profession_id" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BcardForm
