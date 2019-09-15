import EstudianteRow from './EstudianteRow'

let getNewRow = (type, id) => {
	switch (type) {
		case "Estudiante":
			return new EstudianteRow();
		default:
			return {};
	}
};

export {getNewRow};