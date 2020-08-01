import getData from './getData';
import setNewCalificaciones from './setNewCalificaciones';

const getCalificaciones = async ({ state }) => {
	//calificacion_estudiantes:
	let data = await getData({
		url: '/calificaciones',
		params: { curso: state.curso, periodo: state.periodo, asignatura: state.asignatura }
	});

	if (!data.length) {
		console.log('No existe calificaciones', data);
		data = await getData({
			url: '/periodos_estudiantes',
			params: { curso: state.curso, periodo: state.periodo, asignatura: state.asignatura }
		});

		console.log('Periodo estudiantes antes ', data);
		let { estudiantes_inscritos } = data[0];
		let calificaciones = setNewCalificaciones(estudiantes_inscritos);
		data = [ { calificacion_estudiantes: calificaciones } ];

		console.log('Periodo estudiantes ', data);
	}

	let { calificacion_estudiantes } = data[0];
	if (typeof calificacion_estudiantes === 'undefined' || Object.keys(calificacion_estudiantes).length === 0) {
		throw new Error();
	}

	return calificacion_estudiantes;
};

export default getCalificaciones;
