import React, { useState } from 'react';
import Selector from '../helpers/Selector';
import { SEXO, EDAD } from '../constants';

const FormEstudiante = ({ estudiante, handleChange }) => {

	const [state, setstate] = useState({

		...estudiante

	});


	const onChange = (event) => {


		let newState = {}


		if (event.target) {

			if (event.target.name !== 'rne') {

				newState = {
					...state,
					[event.target.name]: event.target.value

				}

			} else {

				const value = event.target.value;


				newState = {
					...state,
					[event.target.name]: value.toLowerCase(),

				}

			}




		} else {

			newState = {
				...state,
				[event.name]: event.value
			}

		}

		console.log('Nuevo state', newState)

		handleChange(newState)

		setstate(newState)

	}


	return (
		<div className="mt-3 mb-3">
			<div className="row mt-3">
				<div className="col-sm mt-3">
					<input
						type="text"
						className="form-control"
						value={state.nombres}
						placeholder="Nombres"
						name={'nombres'}
						autoComplete="off"
						onChange={onChange}
					/>
				</div>
				<div className="col-sm mt-3">
					<input
						type="text"
						className="form-control"
						value={state.apellidos}
						placeholder="Apellidos"
						autoComplete="off"
						name={'apellidos'}
						onChange={onChange}
					/>
				</div>
			</div>

			<div className="row ">
				<div className="col-sm mt-3">
					<input
						type="text"
						name={'rne'}
						className="form-control"
						placeholder="RNE"
						value={state.rne}
						autoComplete="off"
						onChange={onChange}
					/>
				</div>
				<div className="col-sm mt-3">
					<input
						type="email"
						name={'correo'}
						className="form-control"
						placeholder="Email"
						value={state.correo}
						autoComplete="off"
						onChange={onChange}
					/>
				</div>
				<div className="col-sm mt-3">
					<input
						type="tel"
						className="form-control"
						name={'telefono'}
						placeholder="Cel, Ejem: 8096557898  "
						value={state.telefono}
						autoComplete="off"
						onChange={onChange}
					/>
				</div>
			</div>

			<div className="row ">
				<div className="col-sm mt-3">
					<Selector
						title="Sexo"
						name="sexo"
						value={{
							name: 'sexo',
							value: state.sexo.length ? state.sexo : 'Sexo',
							label: state.sexo.length ? state.sexo : 'Sexo'
						}}
						options={SEXO}
						handleChange={onChange}
					/>
				</div>
				<div className="col-sm mt-3">
					<Selector
						title="Edad"
						name="edad"
						value={{
							name: 'edad',
							value: state.edad.length ? state.edad : 'Edad',
							label: state.edad.length ? state.edad : 'Edad'
						}}
						options={EDAD}
						handleChange={onChange}
					/>
				</div>
				<div className="col-sm mt-3">
					<input
						type="date"
						value={state.fecha_nacimiento}
						name={'fecha_nacimiento'}
						className="form-control"
						autoComplete="off"
						onChange={onChange}
						placeholder="Fecha de nacimiento"
					/>
				</div>
			</div>
		</div>
	);
};

export default FormEstudiante;
