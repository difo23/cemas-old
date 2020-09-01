import React from 'react';

import { authenticationService } from './_services';
import { Formik } from 'formik';
import renderFormik from './helpers/LoginRenderFormik';
import loginSchemaFormik from './helpers/loginSchemaFormik';

const LoginPage = (props) => {
	if (authenticationService.currentUserValue) {
		props.history.replace('/calificaciones');
	}

	const initialValues = {
		username: '',
		password: ''
	};

	const onSubmitFormik = ({ username, password }, { setStatus, setSubmitting }) => {
		setStatus();
		authenticationService.login(username, password).then(
			(user) => {
				const { from } = props.location.state || { from: { pathname: '/calificaciones' } };
				props.history.push(from);
			},
			(error) => {
				console.log('No autentificado error', error);
				setSubmitting(false);
				setStatus(error);
			}
		);
	};

	return (
		<div className=" ml-auto mr-auto mt-5" style={{ width: '50%' }}>
			<div className="card text-white bg-dark">
				<div className="card-header">LOGIN ESCUELA</div>

				<div className="card-body">
					<Formik
						initialValues={initialValues}
						validationSchema={loginSchemaFormik}
						onSubmit={onSubmitFormik}
					>
						{renderFormik}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
