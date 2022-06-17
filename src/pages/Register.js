import { Link } from "react-router-dom"
const Register = () => {
  return (
    <div>
      <div className='account-registration-area'>
        <div className='container'>
          <div className='row vh-custom align-items-center'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='registration-area-wrapper'>
                <h3>Create an Account</h3>
                <div className='registration-form'>
                  <form action=''>
                    <div className='form-group'>
                      <label htmlFor='email'>Email</label>
                      <input type='email' className='form-control' placeholder='Your Email' />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='password'>Password</label>
                      <input type='password' className='form-control' placeholder='*******' />
                    </div>
                    <div className='form-group checkbox'>
                      <input type='checkbox' className='form-checkbox' id='check' />
                      <label className='px-2' htmlFor='check'>
                        I agree to the Terms of service & privacy policy.
                      </label>
                    </div>
                    <button type='submit' className='btn btn-main'>
                      Register
                    </button>
                  </form>
                </div>
                <div className='previous-account'>
                  <p>
                    Already have an account? <Link to='/login'>Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
