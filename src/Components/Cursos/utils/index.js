import CursoRow from './CursoRow';

let getNewRow = (type, id) => {
	switch (type) {
		case 'Curso':
			return new CursoRow();
		default:
			return {};
	}
};

export { getNewRow };
