import { currentUser } from 'netlify-identity-widget'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
const BcardForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.bcard?.id)
  }
  const cUser = currentUser()
  console.log(cUser.id, cUser.user_metadata.full_name)
  return (
    <div>
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <div hidden className="field label border round">
          <Label
            hidden
            name="netlify_id"
            errorClassName="rw-label rw-label-error"
          >
            Netlify id
          </Label>

          <TextField
            hidden
            name="netlify_id"
            defaultValue={cUser.id}
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />

          <FieldError name="netlify_id" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="name"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Name
          </Label>

          <TextField
            name="name"
            defaultValue={cUser.user_metadata.full_name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />

          <FieldError name="name" className="rw-field-error" />
        </div>

        <div className="field label border round">
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
        </div>

        <div className="field label border round">
          <Label
            name="email"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Email
          </Label>

          <TextField
            name="email"
            defaultValue={cUser.email}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="email" className="rw-field-error" />
        </div>
        <div className="field label border round">
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
        </div>
        <div className="field label border round">
          <Label
            name="specialization1type"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Specialization1type
          </Label>

          <TextField
            name="specialization1type"
            defaultValue={props.bcard?.specialization1type}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />

          <FieldError name="specialization1type" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="specialization2type"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Specialization2type
          </Label>

          <TextField
            name="specialization2type"
            defaultValue={props.bcard?.specialization2type}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />

          <FieldError name="specialization2type" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="specialization3type"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Specialization3type
          </Label>

          <TextField
            name="specialization3type"
            defaultValue={props.bcard?.specialization3type}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />

          <FieldError name="specialization3type" className="rw-field-error" />
        </div>
        <div className="center-align responsive">
          <Submit disabled={props.loading} className="button responsive">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BcardForm
