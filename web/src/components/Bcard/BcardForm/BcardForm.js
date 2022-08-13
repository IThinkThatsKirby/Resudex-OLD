import { currentUser } from 'netlify-identity-widget'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const BcardForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.bcard?.id)
  }
  const cUser = currentUser()
  console.log(props)
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
        <div className="field label border round">
          <Label
            name="selfie"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Selfie
          </Label>

          <TextField
            name="selfie"
            defaultValue={props.bcard?.selfie}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />

          <FieldError name="selfie" className="rw-field-error" />
        </div>
        <div hidden className="field label border round">
          <Label hidden name="netlify_id">
            Netlify id
          </Label>

          <TextField
            hidden
            name="netlify_id"
            defaultValue={cUser.id}
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
            defaultValue={props.bcard?.name}
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
            defaultValue={props.bcard?.email}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        </div>
        {/* this is a tool we will use later */}
        <div hidden className="field label border round">
          <FieldError name="email" className="rw-field-error" />

          <Label
            name="was_updated"
            className="bold secondary-text"
            errorClassName="rw-label rw-label-error"
          >
            Was updated
          </Label>

          <CheckboxField
            name="was_updated"
            defaultChecked={props.bcard?.was_updated}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="was_updated" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="profession"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Profession
          </Label>

          <TextField
            name="profession"
            defaultValue={props.bcard?.profession}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />

          <FieldError name="profession" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="specialization1"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Specialization1
          </Label>
          <TextField
            name="specialization1"
            defaultValue={props.bcard?.specialization1}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="specialization1" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="specialization1exp"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Specialization1exp
          </Label>

          <NumberField
            name="specialization1exp"
            defaultValue={props.bcard?.specialization1exp}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />

          <FieldError name="specialization1exp" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="spreference1"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Spreference1
          </Label>

          <TextField
            name="spreference1"
            defaultValue={props.bcard?.spreference1}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="spreference1" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="specialization2"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Specialization2
          </Label>

          <TextField
            name="specialization2"
            defaultValue={props.bcard?.specialization2}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="specialization2" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="specialization2exp"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Specialization2exp
          </Label>

          <NumberField
            name="specialization2exp"
            defaultValue={props.bcard?.specialization2exp}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="specialization2exp" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="spreference2"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Spreference2
          </Label>

          <TextField
            name="spreference2"
            defaultValue={props.bcard?.spreference2}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="spreference2" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="specialization3"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Specialization3
          </Label>

          <TextField
            name="specialization3"
            defaultValue={props.bcard?.specialization3}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="specialization3" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="specialization3exp"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Specialization3exp
          </Label>

          <NumberField
            name="specialization3exp"
            defaultValue={props.bcard?.specialization3exp}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="specialization3exp" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Label
            name="spreference3"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Spreference3
          </Label>

          <TextField
            name="spreference3"
            defaultValue={props.bcard?.spreference3}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <FieldError name="spreference3" className="rw-field-error" />
        </div>
        <div className="field label border round">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BcardForm
