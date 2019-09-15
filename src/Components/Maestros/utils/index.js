import MaestroRow from './MaestroRow';

let getNewRow = (type, id) => {
	switch (type) {
		case 'Maestro':
			return new MaestroRow();
		default:
			return {};
	}
};

export { getNewRow };
