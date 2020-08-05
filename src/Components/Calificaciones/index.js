import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';

import Selector from './Selector';
import Alert from './Alert';

//import { SheetJSFT } from './helper/types';
import { getInitialValues } from './helper/getInitialValues';
import { getColumns } from './helper/getColumns';
import postData from './helper/postData';
import setCalificaciones from './helper/setCalificaciones';
import getCalificaciones from './helper/getCalificaciones';
import { cellEditabled } from './helper/cellEditabled';

const Calificaciones = () => {
	const { type, periodo, curso, asignatura, file, TYPES, PERIODOS, CURSOS, ASIGNATURAS, user } = getInitialValues();

	const [ state, setstate ] = useState({
		type,
		periodo,
		curso,
		asignatura,
		file,
		user,
		error: false,
		success: false,
		columns: getColumns(type),
		rows: []
	});

	const handleChange = ({ target }) => {
		console.log('CHANGE', target.name, target.value);
		let newState = {};
		if (target.name === 'type') {
			newState = {
				...state,
				rows: [],
				error: false,
				success: false,
				columns: getColumns(target.value),
				[target.name]: target.value
			};
		} else {
			newState = {
				...state,
				rows: [],
				error: false,
				success: false,
				[target.name]: target.value
			};
		}
		setstate(newState);
	};

	const handleSearch = (e) => {
		console.log('SEARCH');
		//'/periodos_estudiantes'  setstate({ ...state, error: false, success: true, rows: res.calificacion_estudiantes })
		getCalificaciones({
			state: state
		})
			.then((res) => setstate({ ...state, error: false, success: true, rows: res }))
			.catch((err) => setstate({ ...state, success: false, error: true }));
	};

	const handleSend = (e) => {
		e.preventDefault();

		let calificaciones = setCalificaciones(state);

		let con = false;
		// eslint-disable-next-line no-restricted-globals
		con = confirm('Desea Guardar la tabla de calificacion ?');

		if (con && state.rows.length) {
			postData('/calificacion', calificaciones)
				.then((res) =>
					setstate({
						...state,
						error: false,
						success: true
					})
				)
				.catch((e) =>
					setstate({
						...state,
						success: false,
						error: true
					})
				);
		} else {
			setstate({
				...state,
				success: false,
				error: true
			});
		}
	};

	//TODO: Handled file
	const handleFile = (e) => {
		console.log('FILE');
	};

	const cellEdit = cellEditabled(state, setstate);

	return (
		<div className="container  mt-3">
			<div className="form-inline  my-lg-0">
				<h1 className="display-5">Calificaciones Generales</h1>
				{/* <Selector name="type" option={state.type} arr={TYPES} handleChange={handleChange} /> */}
			</div>

			<hr style={{ border: '1px solid green' }} />

			<div className="form-inline  my-lg-0">
				<h3 className="display-5 ">Opciones de Búsqueda:</h3>
				<Selector name="curso" option={state.curso} arr={CURSOS} handleChange={handleChange} />
				<Selector name="asignatura" option={state.asignatura} arr={ASIGNATURAS} handleChange={handleChange} />
				<Selector name="periodo" option={state.periodo} arr={PERIODOS} handleChange={handleChange} />
				<div className="col-sm-2">
					<button onClick={handleSearch} className="btn btn-success ">
						Buscar
					</button>
				</div>
			</div>

			<hr style={{ border: '1px solid green' }} />

			{state.success && <Alert message={'Todo salió bien! Y yo me alegro.'} type={'success'} />}
			{state.error && <Alert message={'Revisa tu conexión o la información que envias!'} type={'danger'} />}

			<div className="container  mt-3 mb-3">
				<h3 className="display-5 mb-3">Tabla de calificaciones:</h3>

				<BootstrapTable
					className="mt-3"
					keyField="numero"
					striped
					hover
					filter={filterFactory()}
					cellEdit={cellEdit}
					noDataIndication={`Listo para buscar las calificaciones ${state.type}:${state.curso}:${state.user
						.username}:${state.asignatura}:${state.periodo}...`}
					// filter={filterFactory()}
					data={state.rows}
					columns={state.columns}
				/>
			</div>

			{/* <hr style={{ border: '1px solid green' }} />

			<div className="ml-2">
				<h3 htmlFor="file">Subir Archivo Excel:</h3>

				<input name="file" type="file" id="file" accept={SheetJSFT} onChange={handleChange} />

				<input
					className="btn btn-primary"
					type="submit"
					value="Actualizar tabla desde archivo"
					onClick={handleFile}
				/>
			</div> */}

			<hr style={{ border: '1px solid green' }} />

			<div className="col-sm-3 mt-3">
				<button onClick={handleSend} className="btn btn-danger ml-1">
					Enviar tabla a BD
				</button>
			</div>
			<hr style={{ border: '1px solid green' }} />
		</div>
	);
};

export default Calificaciones;
