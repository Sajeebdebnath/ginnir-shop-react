import { Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import FormButton from "../components/FormButton"
import FormGroup from "../components/FormGroup"
import { authLogin, clearAuthErrors } from "../redux/actionCreators/authActionCreator"
const Login = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const authLoading = useSelector((state) => state.auth.authLoading)
  const authFailedMsg = useSelector((state) => state.auth.authFailedMsg)

  const location = useLocation()
  const navigate = useNavigate()
  const redirectPath = location.state?.path

  //Form Initial Value
  const initialValues = {
    email: "",
    password: "",
  }

  //Form Validation
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
    return errors
  }

  //Submit Form Data
  const onSubmitHandle = async (values) => {
    console.log("Login")
    dispatch(authLogin(values.email, values.password))

    let timer = setTimeout(() => {
      dispatch(clearAuthErrors())
    }, 2000)
    clearTimeout(timer)
    if (redirectPath !== undefined) navigate(redirectPath, { replace: true })
  }
  return (
    <div>
      <div className='account-registration-area'>
        <div className='container'>
          <div className='row vh-custom align-items-center'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='registration-area-wrapper'>
                <h3>Login into Account</h3>
                {authFailedMsg !== null && (
                  <>
                    <p className='alert alert-danger my-2'>{authFailedMsg}</p>
                  </>
                )}
                {authLoading ? (
                  <>
                    <h3 className='text-center'>Loading..</h3>
                  </>
                ) : token === null ? (
                  <>
                    <div className='registration-form'>
                      <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmitHandle}
                        validate={validateHandle}
                      >
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

                            <FormButton name='Login' />
                          </Form>
                        )}
                      </Formik>
                    </div>
                    <div className='previous-account'>
                      <p>
                        Don't have an account? <Link to='/register'>Register</Link>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className='alert alert-success my-5 text-center'> Logged In completed Successfully!</p>
                    <p className='text-center'>
                      Let's Visit
                      <Link to='/' style={{ color: "var(--bgColor)", marginLeft: "5px" }}>
                        Our Product & Buy Now
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
