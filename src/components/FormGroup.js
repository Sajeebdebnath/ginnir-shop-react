import { Field } from "formik"
const FormGroup = ({ label, type, placeholder, name, touch, error, change, value }) => {
  return (
    <div className='form-group'>
      <label htmlFor='email'>{label}</label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={touch ? (error ? "form-control is-invalid" : "form-control is-valid") : "form-control"}
        value={value}
        onChange={change}
      />
      {touch && error ? (
        <div className='invalid-feedback'>{error}</div>
      ) : (
        <div className='valid-feedback'>Looks good!</div>
      )}
    </div>
  )
}

export default FormGroup
