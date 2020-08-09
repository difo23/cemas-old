import React, { useState } from 'react';

//import PropTypes from 'prop-types';

import Alert from '../Alert';
import { getInitialValues } from '../helper/getInitialValues';
import { getColumns } from '../helper/getColumns';
import postData from '../helper/postData';
import setCalificaciones from '../helper/setCalificaciones';

import { cellEditabled } from '../helper/cellEditabled';
import ListCalificaciones from './ListCalificaciones';

const TablaAcademica = (props) => {
	const { user } = getInitialValues();

	const [ state, setstate ] = useState({
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
		<div>
			{state.success && <Alert message={'Todo salió bien! Y yo me alegro.'} type={'success'} />}
			{state.error && <Alert message={'Revisa tu conexión o la información que envias!'} type={'danger'} />}

			<ListCalificaciones />
			<ListCalificaciones />

			<hr style={{ border: '1px solid gray' }} />

			<div className="col-sm mt-3">
				<button alt="Guardar" className="btn btn-block btn-outline-danger ml-1">
					<i className="fas fa-cloud-upload-alt" />
				</button>
			</div>
			<hr style={{ border: '1px solid green' }} />
		</div>
	);
};

TablaAcademica.propTypes = {};

export default TablaAcademica;
