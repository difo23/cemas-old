import React, { useState } from 'react';
import ListRA from './ListRA';

const TablaTecnica = ({ boletin }) => {


	const [state, setstate] = useState({
		boletin
	});


	const onChangeBoletin = (e) => {

		//e.preventDefault();


		console.log('Boletin Change', e)

	}


	const updateBoletin = (e) => {
		e.preventDefault();

		console.log('Upload boletin tecnico', e);
	}




	return (
		<div>

			{boletin.calificacion_estudiantes.map((estudiante => {


				return <ListRA
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
