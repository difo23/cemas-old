import { textFilter } from 'react-bootstrap-table2-filter';
import { Type } from 'react-bootstrap-table2-editor';

let headerStyle = {
	backgroundColor: '#c8e6c9',
	fontWeight: 'boldest',
	fontSize: '16px',
	color: 'black'
};

let style = {
	fontWeight: 'boldest',
	fontSize: '14px',
	color: 'black',
	'word-wrap': 'break-word'
};

const MAESTROS_COLUMNS = [
	{
		dataField: 'curso',
		text: 'curso:',
		headerStyle,
		style,
		filter: textFilter() // apply text filter
	},
	{
		dataField: 'codigo',
		headerStyle,
		style,
		text: 'codigo:',
		filter: textFilter()
	},
	{
		dataField: 'nombre',
		headerStyle,
		style,
		text: 'Nombre:'
	},
	{
		dataField: 'apellido',
		headerStyle,
		style,
		text: 'Apellido:'
	},
	{
		dataField: 'edad',
		headerStyle,
		style,
		text: 'Edad:'
	},
	{
		dataField: 'sexo',
		headerStyle,
		style,
		text: 'Sexo:',
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: 'M',
					label: 'Masculino'
				},
				{
					value: 'F',
					label: 'Femenino'
				}
			]
		}
	},
	{
		dataField: 'asignatura',
		headerStyle,
		style,
		text: 'Asignatura:'
	}
];


export default MAESTROS_COLUMNS;
