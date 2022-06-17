const FormGroup = ({ label, type, placeholder, name }) => {
  return (
    <div className='form-group'>
      <label htmlFor='email'>{label}</label>
      <input type={type} name={name} className='form-control' placeholder={placeholder} />
    </div>
  )
}

export default FormGroup
