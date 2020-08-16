import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import Alert from '../../helpers/Alert';



import { getUser } from '../../helpers/getUser';
import { getColumns } from '../helper/getColumns';
import postData from '../helper/postData';
import setCalificaciones from '../helper/setCalificaciones';
//import getCalificaciones from '../helper/getCalificaciones';
import { cellEditabled } from '../helper/cellEditabled';

const TablaAcademica = (props) => {
	const user = getUser();

	const [state, setstate] = useState({

		user,
		error: false,
		success: false,
		columns: getColumns('GENERALES'),
		rows: []
	});



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


	const cellEdit = cellEditabled(state, setstate);

	return (
		<div className="container  mt-3">


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
					noDataIndication={`Listo para buscar las calificaciones...`}
					// filter={filterFactory()}
					data={state.rows}
					columns={state.columns}
				/>
			</div>

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

export default TablaAcademica;