import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const Register = () => {
    return (
        <Formik
            initialValue={{ firstname: '', lastname: '', email: '', password: '', cpassword: '' }}
            validationSchema={Yup.object({
                firstname: Yup.string()
                    .max(20, 'must be 20 character or less')
                    .required('firstname is mendatory'),
                lastname: Yup.string()
                    .max(20, 'must be 20 character or less')
                    .required('lastname is mendatory'),
                email: Yup.string()
                    .email('invalid email format')
                    .required('email is mendatory'),
                password: Yup.string()
                    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!&_-?])[A-Za-z\d@#$!&-_?]{8,50}$/, 'Weak password it must contain atleast 8 character with one each uppwecase,lowercase,numeric and spacial character')
                    .reduired('password is mandatory'),
                cpassword: Yup.string()
                    .reduired('confirm password is mandatory')
                    .oneOf([Yup.ref('password'), null], 'password and confirm password must match')

            })}
        >
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 shadow p-3">
                        <Form>
                            <div className="mb-2">
                                <label htmlFor="firstname"> FirstName</label>
                                <Field type="text" id='firstname' className="form-control" />
                                <ErrorMessage className='firstname'>
                                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="lastname"> LastName</label>
                                <Field type="text" id='lastname' className="form-control" />
                                <ErrorMessage className='lastname'>
                                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email"> Email</label>
                                <Field type="email" id='email' className="form-control" />
                                <ErrorMessage className='email'>
                                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password"> Password</label>
                                <Field type="password" id='password' className="form-control" />
                                <ErrorMessage className='password'>
                                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <Field type="password" id='cpassword' className="form-control" />
                                <ErrorMessage className='cpassword'>
                                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className='md-2'>
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Formik>
    )
}

export default Register