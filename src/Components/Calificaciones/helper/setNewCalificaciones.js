const setNewCalificaciones = (alumnos) => {
	if (typeof alumnos === 'undefined' || Object.keys(alumnos).length === 0) {
		return [];
	}
	return alumnos.map((alumno, i) => {
		return {
			numero: alumno.numero,
			rne: alumno.rne,
			ago_sept_oct: 0,
			nov_dic_ene: 0,
			feb_mar: 0,
			abr_may_jun: 0,
			cf: 0
		};
	});
};

export default setNewCalificaciones;
