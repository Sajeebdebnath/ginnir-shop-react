import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div>
      <div className='account-registration-area'>
        <div className='container'>
          <div className='row vh-custom align-items-center'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='registration-area-wrapper'>
                <h3>Login into Account</h3>
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
                    <button type='submit' className='btn btn-main'>
                      Login
                    </button>
                  </form>
                </div>
                <div className='previous-account'>
                  <p>
                    Don't have an account? <Link to='/register'>Register</Link>
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

export default Login
