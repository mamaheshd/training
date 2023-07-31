import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
const Register = () => {
  return (
    <Formik>
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 shadow p-3">
                    <Form>
                        <div className="mb-2">
                            <label htmlFor="firstname"> FirstName</label>
                            <Field type="text" id='firstname' className="form-control"/>
                            <ErrorMessage className='firstname'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="lastname"> LastName</label>
                            <Field type="text" id='lastname' className="form-control"/>
                            <ErrorMessage className='lastname'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email"> Email</label>
                            <Field type="email" id='email' className="form-control"/>
                            <ErrorMessage className='email'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password"> Password</label>
                            <Field type="password" id='password' className="form-control"/>
                            <ErrorMessage className='password'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <Field type="password" id='cpassword' className="form-control"/>
                            <ErrorMessage className='cpassword'>
                                {msg=><div style={{color:'red'}}>{msg}</div>}
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