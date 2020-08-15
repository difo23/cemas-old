import React, { useState } from 'react';
import Selector from '../helpers/Selector';
import { getUser } from '../helpers/getUser';
import { ASIGNATURAS_ACADEMICAS, ASIGNATURAS_TECNICAS, MODALIDADES, GRADOS, SECCIONES, PERIDOS } from './constants';

//import PropTypes from 'prop-types';

const FormAsignaturas = ({ handleChange }) => {

	const initialState = {
		user: getUser(),
		error: false,
		modalidad: null,
		asignatura: null,
		grado: null,
		seccion: null,
		periodo: null,
		asignaturas: [],
		grados: [],
		secciones: [],
		periodos: [],
		code: 'None...'
	}


	const clearState = {
		asignatura: null,
		grado: null,
		seccion: null,
		periodo: null,
		error: false,
		secciones: SECCIONES,
		periodos: PERIDOS
	}
	const createCode = ({ periodo, asigantura, modalidad, grado, seccion }) => {


	}

	const handleAdd = (e) => {
		e.preventDefault();

		if (!!state.periodo) {

			createCode(state);
			handleChange(state)
		}else {

		}

		setstate(initialState);

	}

	const [state, setstate] = useState(initialState);

	const handledState = (e) => {

		let newState = {};

		if (e.value === 'TECNICA') {

			newState = {
				...clearState,
				modalidad: e.value,
				asignaturas: ASIGNATURAS_TECNICAS,
				grados: GRADOS.slice(3, GRADOS.length),
			};

		} else if ((e.value === 'ACADEMICA')) {
			newState = {
				...clearState,
				modalidad: e.value,
				asignaturas: ASIGNATURAS_ACADEMICAS,
				grados: GRADOS,
			};
		} else if (e.name === 'asignatura') {

			newState = {
				grado: null,
				seccion: null,
				periodo: null,
			};

		}


		newState = {
			...state,
			...newState,
			[e.name]: e
		};

		setstate(newState);
	}

	return (
		<form>


			<div className="orm-group row mt-4">



				<div id='modalidad' className="col-sm-4 ">
					<Selector
						title="Modalidad"
						value={state.modalidad}
						options={MODALIDADES}
						handleChange={handledState}
					/>
				</div>
			</div>

			<div className="row mt-5 mb-5">



				<div id='asignatura' className="col-sm-8">
					<Selector
						title="Nombre completo de la asignatura"
						value={state.asignatura}
						options={state.asignaturas}
						handleChange={handledState}
					/>
				</div>
			</div>

			<div className=" row form-inline  my-lg-0 mt-5 mb-5">


				<div className="col-sm-4">
					<Selector
						title="Grado"
						value={state.grado}
						options={state.grados}
						handleChange={handledState}
					/>
				</div>

				<div className="col-sm-4">
					<Selector
						title="Sección"
						value={state.seccion}
						options={state.secciones}
						handleChange={handledState}
					/>
				</div>

				<div className="col-sm-4">
					<Selector
						title="Periodo"
						value={state.periodo}
						options={state.periodos}
						handleChange={handledState}
					/>
				</div>
			</div>

			<div className="form-group row mt-5 mb-5">
				<label htmlFor="static1" className="col-sm-3 col-form-label">
					Código auto-generado:
				</label>
				<div className="col-sm-4">
					<input type="text" readOnly className="form-control-plaintext" id="static1" value="ESPA000" />
				</div>

				<div className="col-sm-4">
					<button onClick={handleAdd} type="button" className="btn btn-block btn-outline-primary">
						<i className="fas fa-plus" />
					</button>
				</div>

			</div>
		</form>
	);
};

FormAsignaturas.propTypes = {};

export default FormAsignaturas;
