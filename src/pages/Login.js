import { Link } from "react-router-dom"
import FormButton from "../components/FormButton"
import FormGroup from "../components/FormGroup"
const Login = () => {
  return (
    <div>
      <div className='account-registration-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='registration-area-wrapper'>
                <h3>Login into Account</h3>
                <div className='registration-form'>
                  <form action=''>
                    <FormGroup label='Email' type='email' name='email' placeholder='Your Email' />
                    <FormGroup label='Password' type='password' name='password' placeholder='*******' />
                    <FormButton name='Login' />
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
