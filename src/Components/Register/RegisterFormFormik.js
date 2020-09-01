import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const RegisterFormFormik = ({ errors, status, touched, isSubmitting }) => {
    return (
        <div>
            <Form>
                <div className="form-group">
                    <label htmlFor="username">EMAIL:</label>
                    <Field
                        name="username"
                        type="email"
                        className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="username" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="codigoCentro:">EMAIL CENTRO EDUCATIVO:</label>
                    <Field
                        name="codigoCentro:"
                        type="email"
                        className={'form-control' + (errors.codigoCentro: && touched.codigoCentro: ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="codigoCentro:" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">NOMBRE:</label>
                    <Field
                        name="firstName"
                        type="text"
                        className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">APELLIDO:</label>
                    <Field
                        name="lastName"
                        type="text"
                        className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">CONTRASEÑA:</label>
                    <Field
                        name="password"
                        type="password"
                        className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                    <label htmlFor="passwordConfirm">CONFIRMAR CONTRASEÑA:</label>
                    <Field
                        name="passwordConfirm"
                        type="password"
                        className={'form-control' + (errors.passwordConfirm && touched.passwordConfirm ? ' is-invalid' : '')}
                    />
                    <ErrorMessage name="passwordConfirm" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-outline-success" disabled={isSubmitting}>
                        Register
					</button>

                    <Link className="card-link ml-1 " to='/login'> Back to Login</Link>


                </div>
                {status && <div className={'alert alert-danger'}>{status}</div>}
            </Form>
        </div>
    );
};

export default RegisterFormFormik;
