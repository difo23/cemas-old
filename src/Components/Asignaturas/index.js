import React, { useState } from 'react';
import FormAsignaturas from './FormAsignaturas';
import ListBoletines from './ListBoletines';
import Alert from '../helpers/Alert';

const Asignaturas = () => {
	const initialState = {
		boletines: [],
		error: false

	}

	const [state, setstate] = useState(initialState)



	const handleChange = (boletin) => {



		const {
			ra,
			estudiante,
			tecnico,
			code } = boletin

		if (!state.boletines.find((boletin) => { return code.slice(0, code.length - 5) === boletin.code.slice(0, code.length - 5) })) {

			setstate({
				boletines: [...state.boletines, {
					ra,
					estudiante,
					tecnico,
					code
				}],
				error: false
			})


		} else {

			setstate({
				...state,
				error: true
			})
		}


	}


	return (
		<div className="container  mt-3">
			<h1 className="  display-5">Asignaturas</h1>

			<hr style={{ border: '1px solid green' }} />



			<div className="asignaturas">
				<h3 className="diplay-4 mb-3"> Registro de Boletines:</h3>
				<FormAsignaturas handleChange={handleChange} />
			</div>

			<hr style={{ border: '.2px solid gray' }} />


			<div >
				<h3 className="diplay-4 mb-3 mt-3"> Lista de Boletines a calificar:</h3>
				{state.error && <Alert message={'Ya esta registrada esta asigantura!'} type={'danger'} />}
				<ListBoletines
					boletines={state.boletines}

				/>
			</div>
		</div>
	);
};

export default Asignaturas;
