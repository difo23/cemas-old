import React, { useState, useEffect } from 'react';
import FormAsignaturas from './FormAsignaturas';
import ListBoletines from './ListBoletines';
import Alert from '../helpers/Alert';
import getRecordsByCode from './helpers/getRecordsByCode';
import postData from '../../api/postData';
import deleteData from '../../api/deleteData';
import createCalificaciones from './helpers/createCalificaciones';
import { getUser } from '../helpers/getUser';


const Asignaturas = () => {

	const [state, setstate] = useState({
		user: getUser(),
		error: false,
		success: false,
		boletines: [],
		message: ''
	});

	useEffect(() => {
		//GET All records by user- for test I will use ÁNGELA FELIZ-AMFH000

		getRecordsByCode([{
			key: 'codigo_maestro',
			value: getUser().username
		}]).then(data => setstate(state => {
			return ({
				...state,
				error: false,
				success: true,
				message: `${data.length} boletin${data.length < 2 ? '' : 'es'} obtenido${data.length < 2 ? '' : 's'} de  BD.`,
				boletines: data
			})
		})).catch((err) => setstate(state => {
			return ({
				...state,
				boletines: [],
				message: 'Revisar el internet!',
				error: true,
				success: false,
			})
		})
		)


	}, [])

	const handleDelete = (id, codigo_calificacion) => {

		if (window.confirm(`Deseas elimnar este boletin ${codigo_calificacion}`)) {

			console.log(id);
			deleteData('/calificacion', id);
			setstate({
				...state,
				boletines: [...(state.boletines.filter(boletin => boletin._id !== id))],
				success: true,
				message: `Se ha eliminado el boletin ${codigo_calificacion}.`,
				error: false
			})
		} else {

			console.log(`Cancelado el borrado de ${codigo_calificacion}`)
		}
	}

	const handleChange = (select) => {

		const { boletin_select } = select;

		const registro_find = state.boletines.find((boletin) => {
			return (
				boletin_select.codigo_asignatura === boletin.codigo_asignatura && boletin_select.codigo_periodo === boletin.codigo_periodo && boletin_select.codigo_curso === boletin.codigo_curso
			)
		});

		if (!registro_find) {

			//TODO: 

			createCalificaciones(boletin_select).then(
				(boletin) => {


					if (!boletin) {
						//no exite curso con estudiantes registrados

						setstate({
							...state,
							error: true,
							success: false,
							message: `No exite curso con estudiantes registrados! Solicitar al titular que registre los estudiantes.`
						})

					} else {

						//Guardar Boletin nuevo en base de datos
						postData('/calificaciones/create', boletin)
							.then((res) => { return res.json() })
							.then((data) => {

								console.log('Result ', data);

								setstate({
									...state,
									boletines: [...state.boletines, {
										...data.calificacion
									}],
									success: true,
									message: 'Nuevo boletin fue creado correctamente.',
									error: false
								})
							});

					}


				}
			);

		} else {

			setstate({
				...state,
				...state,
				success: false,
				error: true,
				message: 'Ya esta registrada esta asigantura :(!',
			})
		}
	}


	return (
		<div className="container  mt-3 mb-5">
			<h1 className="  display-5">Asignaturas:
				{
					!(state.success) && <div className=" spinner-grow text-success ml-3" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				}
			</h1>

			<hr style={{ border: '1px solid green' }} />



			<div className="asignaturas">
				<h3 className="diplay-4 mb-3"> Registro de asignaturas:</h3>
				<FormAsignaturas handleChange={handleChange} />
			</div>

			<hr style={{ border: '.2px solid gray' }} />


			<div >
				<h3 className="diplay-4 mb-3 mt-3"> Lista de asignaturas a calificar:</h3>

				{state.error && <Alert message={`${state.message}`} type={'danger'} />}

				{state.success && <Alert message={`${state.message}`} type={'success'} />}

				<ListBoletines
					handleDelete={handleDelete}
					boletines={state.boletines}

				/>
			</div>
		</div>
	);
};

export default Asignaturas;
