import React, { useState, useEffect } from 'react';
import FormAsignaturas from './FormAsignaturas';
import ListBoletines from './ListBoletines';
import Alert from '../helpers/Alert';
import getRecordsByCode from './helpers/getRecordsByCode';

const Asignaturas = () => {

	const [state, setstate] = useState({
		error: false,
		boletines: []
	});

	useEffect(() => {
		//GET All records by user- for test I will use ÁNGELA FELIZ-AMFH000

		getRecordsByCode([{
			key: 'codigo_maestro',
			value: "ÁNGELA FELIZ-AMFH000"
		}]).then(data => setstate({
			error: false,
			boletines: data
		})).catch((err) => console.log(err));


	}, [])

	const handleChange = (select) => {

		const { code } = select

		if (!state.boletines.find((boletin) => {
			return (
				select.code.codigo_asignatura === boletin.codigo_asignatura && select.code.codigo_periodo === boletin.codigo_periodo && select.code.codigo_curso === boletin.codigo_curso
			)
		})
		) {

			/*TODO: 
				Es necesario crear la interfaz de registro.
				Crear el api para la interfaz de registro.

				Necesito crear una nueva lista de estudiantes basados en registro del curso y compararlo con el numero de estudiantes pasado por la interfaz.
			
			*/

			createCalificaciones(code).then(
				(calificaciones) => {
					code.calificacion_estudiantes = calificaciones
					setstate({
						boletines: [...state.boletines, {
							...code
						}],
						error: false
					})

				}
			);



		} else {

			setstate({
				...state,
				error: true
			})
		}


	}


	return (
		<div className="container  mt-3">
			<h1 className="  display-5">Asignaturas</h1>

			<hr style={{ border: '1px solid green' }} />



			<div className="asignaturas">
				<h3 className="diplay-4 mb-3"> Registro de Boletines:</h3>
				<FormAsignaturas handleChange={handleChange} />
			</div>

			<hr style={{ border: '.2px solid gray' }} />


			<div >
				<h3 className="diplay-4 mb-3 mt-3"> Lista de Boletines a calificar:</h3>
				{state.error && <Alert message={'Ya esta registrada esta asigantura!'} type={'danger'} />}
				<ListBoletines
					boletines={state.boletines}

				/>
			</div>
		</div>
	);
};

export default Asignaturas;
