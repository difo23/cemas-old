import React, { useState } from 'react';

import FormCurso from './FormCurso';
import ListEstudiantes from './ListEstudiantes';

const Registro = () => {

	const [state, setstate] = useState({
		estudiantes: 0,
	})

	const handleChange = (event) => {

		console.log('Registro', event)
		setstate(event)

	}
	return (
		<div className="container mt-3 mb-5">
			<h1>Registro</h1>
			<hr style={{ border: '1px solid green' }} />
			<FormCurso handleChange={handleChange} />
			<hr style={{ border: '1px solid green' }} />

			{
				Array(state.estudiantes * 1).fill(1).map((e, i) => {

					return <ListEstudiantes key={`${e}-${i}`} numero={i + 1} />

				})
			}

		</div>
	);
};

export default Registro;
