import cellEditFactory from 'react-bootstrap-table2-editor';
import { updateRatings } from './updateRatings';

export const cellEditabled = (state, setstate) => {
	let cell = cellEditFactory({
		mode: 'click',
		autoSelectText: true,
		blurToSave: true,
		beforeSaveCell: (oldValue, newValue, row, column) => {},
		validator: (newValue, row, column) => {
			return true;
		},

		afterSaveCell: (oldValue, newValue, row, column) => {
			let rows = state.rows;
			let newRows = updateRatings(row.numero, rows);

			setstate({
				...state,
				rows: newRows
			});
			console.log('Estado actualizado: ', state);
		}
	});

	return cell;
};
