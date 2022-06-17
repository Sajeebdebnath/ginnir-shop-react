import { Link } from "react-router-dom"
import FormButton from "../components/FormButton"
import FormGroup from "../components/FormGroup"
import FormGroupCheck from "../components/FormGroupCheck"
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
                    <FormGroup label='Email' type='email' name='email' placeholder='Your Email' />
                    <FormGroup label='Password' type='password' name='password' placeholder='*******' />
                    <FormGroupCheck />
                    <FormButton name='Register' />
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
