import React, { useState } from 'react';
import ListRA from './ListRA';
import updateData from '../../../api/updateData';
import Alert from '../../helpers/Alert';

const TablaTecnica = ({ boletin }) => {


	const [state, setstate] = useState({
		boletin,
		error: false,
		success: false
	});


	const onChangeBoletin = ({ estudiante }) => {


		const calificacion_estudiantes = state.boletin.calificacion_estudiantes.map(est => {

			if (est.numero === estudiante.numero) {
				return estudiante;
			}

			return est;
		})

		const boletin_update = {
			...state.boletin,
			calificacion_estudiantes: calificacion_estudiantes
		};

		setstate({ boletin: boletin_update })

		console.log('Boletin Change', boletin_update)

	}


	const updateBoletin = (e) => {
		e.preventDefault();

		if (window.confirm('Desea Guardar la tabla de calificacion ?')
			&& state.boletin.calificacion_estudiantes.length
		) {
			updateData('/calificacion', state.boletin._id, state.boletin)
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
				boletin,
				success: false,
				error: true
			});
		}

		console.log('Upload boletin tecnico', e);
	}




	return (
		<div>

			{state.success && <Alert message={'Todo salió bien! Y yo me alegro.'} type={'success'} />}
			{state.error && <Alert message={'Revisa tu conexión o la información que envias!'} type={'danger'} />}


			{state.boletin.calificacion_estudiantes.map((estudiante => {


				return <ListRA
					updateBoletin={updateBoletin}
					key={estudiante.numero}
					onChangeBoletin={onChangeBoletin}
					estudiante={estudiante}
				/>

			}))}


			<hr style={{ border: '1px solid gray' }} />

			<div className="col-sm mt-3">
				<button alt="Guardar" onClick={updateBoletin} className="btn btn-block btn-outline-danger ml-1">
					<i className="fas fa-cloud-upload-alt" />
				</button>
			</div>
			<hr style={{ border: '1px solid green' }} />
		</div>
	);
};

export default TablaTecnica;
