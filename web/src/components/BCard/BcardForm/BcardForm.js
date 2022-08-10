import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const BcardForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.bcard?.id)
  }

  return (
    <Form className="center-align" onSubmit={onSubmit} error={props.error}>
      <FormError error={props.error} />
      <Label
        name="user_id"
        className="rw-label"
        errorClassName="rw-label rw-label-error toast"
      >
        User id
      </Label>

      <NumberField
        name="user_id"
        defaultValue={props.bcard?.user_id}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />

      <FieldError name="user_id" className="rw-field-error" />

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
        <Submit disabled={props.loading} className="responsive">
          Save
        </Submit>
      </div>
    </Form>
  )
}

export default BcardForm
