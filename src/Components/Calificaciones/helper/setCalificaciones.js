const setCalificaciones = ({ rows, type, curso, asignatura, user, periodo }) => {
	return {
		calificacion_estudiantes: rows,
		estado: 'true',
		modalidad: type,
		codigo_curso: curso,
		codigo_asignatura: asignatura,
		codigo_maestro: user.username,
		codigo_periodo: periodo,
		codigo_calificacion: `${type}:${curso}:${user.username}:${asignatura}:${periodo}`
	};
};

export default setCalificaciones;
