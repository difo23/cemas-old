import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';

import Selector from './Selector';
import { SheetJSFT } from './helper/types';
import { getInitialValues } from './helper/getInitialValues';
import { getColumns } from './helper/getColumns';

const Calificaciones = () => {
	const { type, periodo, curso, asignatura, file, TYPES, PERIODOS, CURSOS, ASIGNATURAS, user } = getInitialValues();

	const [ state, setstate ] = useState({
		type,
		periodo,
		curso,
		asignatura,
		file,
		user,
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
				columns: getColumns(target.value),
				[target.name]: target.value
			};
		} else {
			newState = {
				...state,
				rows: [],
				[target.name]: target.value
			};
		}
		setstate(newState);
	};

	const handleSearch = (e) => {
		console.log('SEARCH');
		setstate({
			...state,
			rows: [
				{
					numero: 1,
					ago_sept_oct: 0,
					nov_dic_ene: 0,
					feb_mar: 0,
					abr_may_jun: 0,
					cf: 0
				}
			]
		});

		console.log(state);
	};

	const handleSend = (e) => {
		console.log('SEND');
	};

	const handleFile = (e) => {
		console.log('FILE');
	};

	return (
		<div className="container  mt-3">
			<div className="form-inline  my-lg-0">
				<h1 className="display-5">Calificaciones:</h1>
				<Selector name="type" option={state.type} arr={TYPES} handleChange={handleChange} />
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

			<div className="container  mt-3 mb-3">
				<h3 className="display-5 mb-3">Tabla de calificaciones:</h3>

				<BootstrapTable
					className="mt-3"
					keyField="numero"
					noDataIndication={`Listo para buscar las calificaciones ${state.type}:${state.curso}:${state.user
						.username}:${state.asignatura}:${state.periodo}...`}
					// filter={filterFactory()}
					data={state.rows}
					columns={state.columns}
				/>
			</div>

			<hr style={{ border: '1px solid green' }} />

			<div className="ml-2">
				<h3 htmlFor="file">Subir Archivo Excel:</h3>

				<input name="file" type="file" id="file" accept={SheetJSFT} onChange={handleChange} />

				<input
					className="btn btn-primary"
					type="submit"
					value="Actualizar tabla desde archivo"
					onClick={handleFile}
				/>
			</div>

			<hr style={{ border: '1px solid green' }} />

			<div className="col-sm-3 mt-3">
				<button onClick={handleSend} className="btn btn-danger ml-1">
					Enviar tabla a BD
				</button>
			</div>
		</div>
	);
};

export default Calificaciones;
