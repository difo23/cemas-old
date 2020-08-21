import React, { useState } from 'react';
import Selector from '../helpers/Selector';
import { getUser } from '../helpers/getUser';
import { ASIGNATURAS_ACADEMICAS, ASIGNATURAS_TECNICAS, MODALIDADES, GRADOS, SECCIONES, PERIDOS, ESTUDIANTES, RAS } from './constants';
import Alert from '../helpers/Alert';
import createBoletinSelect from './helpers/createBoletinSelect';
//import PropTypes from 'prop-types';

const FormAsignaturas = ({ handleChange }) => {

	const initialState = {
		user: getUser(),
		ra: null,
		estudiante: null,
		tecnico: false,
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
		estudiantes: [],
		ras: [],
		boletin_select: { codigo_calificacion: '' }
	}


	const clearState = {
		asignatura: null,
		grado: null,
		seccion: null,
		periodo: null,
		error: false,
		ra: {
			name: 'ra',
			value: '0',
			label: 'RAs'
		},
		estudiante: null,
		secciones: SECCIONES,
		periodos: PERIDOS,
		estudiantes: ESTUDIANTES,
		ras: RAS,
		boletin_select: { codigo_calificacion: '' }
	}

	const [state, setstate] = useState(initialState);




	const handleAdd = (e) => {
		e.preventDefault();

		if (!!state.periodo) {


			handleChange(
				{
					boletin_select: state.boletin_select
				})

			setstate(initialState);
		} else {



			setstate({ ...state, error: true })

		}


	}


	const handledState = (e) => {

		let newState = {};

		if (e.value === 'TECNICA') {

			newState = {
				...clearState,
				modalidad: e.value,
				asignaturas: ASIGNATURAS_TECNICAS,
				grados: GRADOS.slice(3, GRADOS.length),
				tecnico: true
			};

		} else if ((e.value === 'ACADEMICA')) {
			newState = {
				...clearState,
				modalidad: e.value,
				asignaturas: ASIGNATURAS_ACADEMICAS,
				grados: GRADOS,
				tecnico: false
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


		let boletin_select = createBoletinSelect(newState);


		setstate({ ...newState, boletin_select });
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


				<div className="col-sm-2">
					<Selector
						title="Grado"
						value={state.grado}
						options={state.grados}
						handleChange={handledState}
					/>
				</div>

				<div className="col-sm-2">
					<Selector
						title="Sección"
						value={state.seccion}
						options={state.secciones}
						handleChange={handledState}
					/>
				</div>

				<div className="col-sm-2">
					<Selector
						title="Periodo"
						value={state.periodo}
						options={state.periodos}
						handleChange={handledState}
					/>
				</div>

				<div className="col-sm-3">
					<Selector
						title="#Estudiantes"
						value={state.estudiante}
						options={state.estudiantes}
						handleChange={handledState}
					/>
				</div>

				{
					state.tecnico ? (
						<div className="col-sm-3">
							<Selector
								title="RAs"
								value={state.ra}
								options={state.ras}
								handleChange={handledState}
							/>
						</div>) : <div className="col-sm-3 " />

				}
			</div>

			<div className="form-group row mt-5 mb-5">
				<label htmlFor="static1" className="col-sm-3 col-form-label">
					Código auto-generado:
				</label>
				<div className="col-sm-7">

					<input type="text" readOnly className="form-control-plaintext" id="static1" value={state.boletin_select.codigo_calificacion || ''} />
				</div>

				<div className="col-sm-2">
					<button onClick={handleAdd} type="button" className="btn btn-block btn-outline-primary">
						<i className="fas fa-plus" />
					</button>
				</div>

			</div>
			{state.error && <Alert message={'Debes completar todos los campos del formulario!'} type={'danger'} />}
		</form>
	);
};

FormAsignaturas.propTypes = {};

export default FormAsignaturas;
