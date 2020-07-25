import React from 'react';
import { Field, Form, ErrorMessage } from 'formik';

const renderFormik = ({ errors, status, touched, isSubmitting }) => {
	return (
		<div>
			<Form>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<Field
						name="username"
						type="text"
						className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')}
					/>
					<ErrorMessage name="username" component="div" className="invalid-feedback" />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<Field
						name="password"
						type="password"
						className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
					/>
					<ErrorMessage name="password" component="div" className="invalid-feedback" />
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-success" disabled={isSubmitting}>
						Login
					</button>
				</div>
				{status && <div className={'alert alert-danger'}>{status}</div>}
			</Form>
		</div>
	);
};

export default renderFormik;
