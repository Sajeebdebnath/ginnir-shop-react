import { Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import FormButton from "../components/FormButton"
import FormGroup from "../components/FormGroup"
import FormGroupCheck from "../components/FormGroupCheck"
import { authSignUp, clearAuthErrors } from "../redux/actionCreators/authActionCreator"
const Register = () => {
  const dispatch = useDispatch()
  const authLoading = useSelector((state) => state.auth.authLoading)
  const authSuccessMsg = useSelector((state) => state.auth.authSuccessMsg)
  const authFailedMsg = useSelector((state) => state.auth.authFailedMsg)

  const initialValues = {
    email: "",
    password: "",
  }

  const validateHandle = (values) => {
    const errors = {}

    if (!values.email) {
      errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid Email Address"
    }

    if (!values.password) {
      errors.password = "Field is Required"
    } else if (values.password.length < 8) {
      errors.password = "Must be atleast 8 characters long"
    } else if (values.password.length > 50) {
      errors.password = "Don't be miximum 50 characters long"
    }

    if (!values.passwordConfirm) {
      errors.passwordConfirm = "Field is Required"
    } else if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = "Passwords doesn't match"
    } else if (values.password.length < 8) {
      errors.passwordConfirm = "Must be atleast 8 characters long"
    }

    return errors
  }
  const onSubmitHandle = async (values) => {
    console.log(values)
    dispatch(authSignUp(values.email, values.password))

    let timer = setTimeout(() => {
      dispatch(clearAuthErrors())
    }, 2000)
    clearTimeout(timer)
  }

  return (
    <div>
      <div className='account-registration-area'>
        <div className='container'>
          <div className='row vh-custom align-items-center'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='registration-area-wrapper'>
                <h3>Create an Account</h3>
                {authFailedMsg !== null && (
                  <>
                    <p className='alert alert-danger my-2'>{authFailedMsg}</p>
                  </>
                )}
                {authSuccessMsg !== null && (
                  <>
                    <p className='alert alert-success my-2'>Account Creation Successful.</p>
                  </>
                )}
                {authLoading ? (
                  <>
                    <h3 className='text-center'>Please wait Registration Loading..</h3>
                  </>
                ) : (
                  <div className='registration-form'>
                    <Formik initialValues={initialValues} onSubmit={onSubmitHandle} validate={validateHandle}>
                      {({ values, errors, touched, handleChange, handleSubmit, handleReset }) => (
                        <Form>
                          <FormGroup
                            label='Email'
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            change={handleChange}
                            value={values.email}
                            touch={touched.email}
                            error={errors.email}
                          />
                          <FormGroup
                            label='Password'
                            type='password'
                            name='password'
                            placeholder='*******'
                            change={handleChange}
                            value={values.password}
                            touch={touched.password}
                            error={errors.password}
                          />
                          <FormGroup
                            label='Confirm Password'
                            type='password'
                            name='passwordConfirm'
                            placeholder='*******'
                            change={handleChange}
                            value={values.passwordConfirm}
                            touch={touched.passwordConfirm}
                            error={errors.passwordConfirm}
                          />
                          <FormGroupCheck />
                          <FormButton name='Register' />
                        </Form>
                      )}
                    </Formik>
                  </div>
                )}

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
