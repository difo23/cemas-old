import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import Alert from '../../helpers/Alert';



import { getUser } from '../../helpers/getUser';
import { getColumns } from '../helper/getColumns';
// import postData from '../../../api/postData';
// import setCalificaciones from '../helper/setCalificaciones';
// //import getCalificaciones from '../helper/getCalificaciones';
import { cellEditabled } from '../helper/cellEditabled';
import updateData from '../../../api/updateData';

const TablaAcademica = (props) => {
	const user = getUser();


	const [state, setstate] = useState({

		user,
		error: false,
		success: false,
		columns: getColumns('GENERALES'),
		boletin: props.boletin,
		rows: props.boletin.calificacion_estudiantes
	});



	const handleSend = (e) => {
		e.preventDefault();

		let boletin = { ...state.boletin, calificacion_estudiantes: state.rows };
		console.log('Guardar tabla ', boletin)

		if (window.confirm('Desea Guardar la tabla de calificacion ?')
			&& state.rows.length
		) {
			updateData('/calificacion', boletin._id, boletin)
				.then((res) =>
					setstate({
						...state,
						boletin,
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
				boletin,
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

			<div className="col-sm-12 mt-3">
				<button alt="Guardar" onClick={handleSend} className="btn btn-block btn-outline-danger ml-1">
					<i className="fas fa-cloud-upload-alt" />
				</button>
			</div>
			<hr style={{ border: '1px solid green' }} />
		</div>
	);
};

export default TablaAcademica;