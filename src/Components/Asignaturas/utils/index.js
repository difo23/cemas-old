import AsignaturaRow from './AsignaturaRow';

let getNewRow = (type, id) => {
	switch (type) {
		case 'Asignatura':
			return new AsignaturaRow();
		default:
			return {};
	}
};

export { getNewRow };
