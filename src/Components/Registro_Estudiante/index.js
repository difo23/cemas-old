import React, { useState } from 'react';

import FormCurso from './FormCurso';
import ListEstudiantes from './ListEstudiantes';
import createCurso from './createCurso';
import getUser from '../helpers/getUser';

const Registro = () => {

	const [state, setstate] = useState({

		user: getUser()

	})

	const handleChange = (event) => {

		console.log('Registro', event)



		if (event.estudiantes > 1) {
			setstate({
				...state,
				curso: createCurso({ ...event, user: state.user })
			});

		};
	}


	return (
		<div className="container mt-3 mb-5">
			<h1>Registro</h1>
			<hr style={{ border: '1px solid green' }} />
			<FormCurso handleChange={handleChange} />
			<hr style={{ border: '1px solid green' }} />

			{/* <ListEstudiantes estudiantes={state.estudiantes} /> */}
		</div>
	);
};

export default Registro;
