const FormGroupCheck = () => {
  return (
    <div className='form-group checkbox'>
      <input type='checkbox' className='form-checkbox' id='check' />
      <label className='px-2' htmlFor='check'>
        I agree to the Terms of service & privacy policy.
      </label>
    </div>
  )
}

export default FormGroupCheck
