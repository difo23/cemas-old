import React, { useState } from 'react';
import Selector from '../helpers/Selector';
import { GRADOS, SECCIONES, PERIDOS } from '../constants';
//import PropTypes from 'prop-types';

const FormCurso = (props) => {

	const [state, setstate] = useState({
		estudiantes: '',
		grado: { name: 'Grado', value: 'Grado', label: 'Grado' },
		periodo: { name: 'Periodo', value: 'Perido', label: 'Periodo' },
		seccion: { name: 'Seccion', value: 'Seccion', label: 'Seccion' },
		code: '',
		grados: GRADOS,
		secciones: SECCIONES,
		periodos: PERIDOS

	})

	const handleChange = (event) => {

	
		let newState = {}
		let code = '';

		if (event.target) {

			

			if (event.target.value.length > 0) {

				code = `${state.grado.value}${state.seccion.value}:${state.periodo.value}:${event.target.value}`;
			}

			newState = {
				...state,
				[event.target.name]: event.target.value,
				code
			}

		} else {

			newState = {
				...state,
				[event.name]: event
			}

		}

		setstate(newState)

	}


	const handleAdd = (e) => {
		e.preventDefault();

		if (state.estudiantes > 0) {


			props.handleChange(state);

		} else {
			window.alert('La cantidad de estudiantes inscritos debe ser mayor!')
		}

	}


	return (
		<form>
			<div className="col mt-3 mr-3 mb-3">
				<h5>Curso: </h5>
			</div>

			<div className=" row   mt-3">
				<div className="col-sm-3 mt-1">
					<Selector title="Grado" name="grado" value={state.grado} options={state.grados} handleChange={handleChange} />
				</div>

				<div className="col-sm-3 mt-1">
					<Selector title="Sección" name="seccion" value={state.seccion} options={state.secciones} handleChange={handleChange} />
				</div>

				<div className="col-sm-3 mt-1">
					<Selector title="Periodo" name="periodo" value={state.periodo} options={state.periodos} handleChange={handleChange} />
				</div>
				<div className="col-sm-3 mt-1">
					<input
						type="number"
						name="estudiantes"
						value={state.estudiantes}
						id="estudiantes"
						placeholder="#Estudiantes"
						className="form-control"
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="form-group row mt-4">
				<label htmlFor="static1" className="col-sm-3 col-form-label">
					Código auto-generado:
				</label>
				<div className="col-sm-4">
					<input
						type="text"
						readOnly
						className="form-control-plaintext"
						id="static1"
						value={state.code}
					/>
				</div>

				<div className="col-sm-2">
					<button onClick={handleAdd} type="button" className="btn btn-block btn-outline-primary">
						<i className="fas fa-plus" />
					</button>
				</div>
			</div>
		</form>
	);
};

FormCurso.propTypes = {};

export default FormCurso;
