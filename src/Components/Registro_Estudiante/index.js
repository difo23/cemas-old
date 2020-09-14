import React, { useState, useEffect } from 'react';
import getCursosByCode from '../helpers/getCursosByCode';
import FormCurso from './FormCurso';
import Alert from '../helpers/Alert';
import ListCurso from './ListCurso';
import createCurso from './createCurso';
import { getUser } from '../helpers/getUser';
import deleteData from '../../api/deleteData';



const Registro = () => {

	const [state, setstate] = useState({
		cursos: [],
		user: getUser(),
		error: false,
		success: false,
		message: '',
	})

	useEffect(() => {
		console.log('Cargar todos los cursos creados por el usuario');
		let username = getUser().username

		getCursosByCode([{
			key: 'codigo_titular',
			value: username
		}]).then(data => setstate(state => {
			return ({
				...state,
				error: false,
				success: true,
				message: `${data.length} Curso${data.length < 2 ? '' : 's'} obtenido${data.length < 2 ? '' : 's'} de  BD.`,
				cursos: data
			})
		})).catch((err) => setstate(state => {
			return ({
				...state,
				cursos: [],
				message: 'Revisar el internet!',
				error: true,
				success: false,
			})
		}))
	}, [])

	const handleDelete = (id, codigo_calificaciones) => {

		if (window.confirm(`Deseas elimnar este curso ${codigo_calificaciones}`)) {

			console.log(id);
			deleteData('/curso', id);
			setstate({
				...state,
				cursos: [...(state.cursos.filter(curso => curso._id !== id))],
				success: true,
				message: `Se ha eliminado el curso ${codigo_calificaciones}.`,
				error: false
			})
		} else {

			console.log(`Cancelado el borrado de ${codigo_calificaciones}`)
		}
	}


	const handleChange = (event) => {


		if (event.estudiantes > 1) {

			createCurso({ ...event, user: state.user }).then((res) => {


				return res.json();
			}).then((data) => {


				console.log('Promesa', data)

				if (data.curso) {

					setstate({
						...state,
						success: true,
						message: `Nuevo curso ${data.curso.codigo_calificaciones} agregado.`,
						error: false,
						cursos: [...state.cursos, data.curso]
					});

				} else {

					setstate({
						...state,
						success: false,
						message: `Estas duplicando el curso `,
						error: true
					})


				}





			})



		};
	}


	return (
		<div className="container mt-3 mb-5">
			<h1>Registro</h1>
			<hr style={{ border: '1px solid green' }} />
			<FormCurso handleChange={handleChange} />
			<hr style={{ border: '1px solid green' }} />

			<h5>Lista de cursos:</h5>
			{state.error && <Alert message={`${state.message}`} type={'danger'} />}
			{state.success && <Alert message={`${state.message}`} type={'success'} />}
			<ListCurso cursos={state.cursos} handleDelete={handleDelete} />

		</div>
	);
};

export default Registro;
