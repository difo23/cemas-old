import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

const renderFormik = ({ errors, status, touched, isSubmitting }) => {
	return (
		<div>
			<Form>
				<div className="form-group">
					<label htmlFor="username">EMAIL:</label>
					<Field
						name="username"
						type="text"
						className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')}
					/>
					<ErrorMessage name="username" component="div" className="invalid-feedback" />
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
					<button type="submit" className="btn btn-outline-success" disabled={isSubmitting}>
						Login
					</button>

					<Link className="card-link ml-1 " to='/register'> Go to Register</Link>

					{
						status && status.logging && <div className=" spinner-grow text-success ml-3" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					}

				</div>
				{status && status.message && <div className={'alert alert-danger'}>{status.message}</div>}
			</Form>
		</div>
	);
};

export default renderFormik;
