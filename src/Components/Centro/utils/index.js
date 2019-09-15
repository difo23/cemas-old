import CentroRow from './CentroRow';

let getNewRow = (type, id) => {
	switch (type) {
		case 'centro':
			return new CentroRow();
		default:
			return {};
	}
};

export { getNewRow };
