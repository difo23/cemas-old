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

const CURSO_COLUMNS = [
	{
		dataField: 'periodo',
		text: 'PERIODO',
		headerStyle,
		style,
		filter: textFilter() // apply text filter
	},
	{
		dataField: 'type',
		headerStyle,
		style,
		text: 'GRADO:',
		filter: textFilter(),
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: '1',
					label: '1ro'
				},
				{
					value: '2',
					label: '2do'
				},
				{
					value: '3',
					label: '3ro'
				},
				{
					value: '4',
					label: '4to'
				},
				{
					value: '5',
					label: '5to'
				},
				{
					value: '6',
					label: '6to'
				}
			]
		}
	},
	{
		dataField: 'type',
		headerStyle,
		style,
		text: 'SECCION:',
		filter: textFilter(),
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: 'A',
					label: 'A'
				},
				{
					value: 'B',
					label: 'B'
				},
				{
					value: 'C',
					label: 'C'
				},
				{
					value: 'D',
					label: 'D'
				},
				{
					value: 'E',
					label: 'E'
				}
			]
		}
	},

	{
		dataField: 'type',
		headerStyle,
		style,
		text: 'TITULAR:',
		filter: textFilter(),
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: 'JNRODRIGUEZP000',
					label: 'Juan Normando Rodriguez Perez'
				},
				{
					value: 'AMRODRIGUEZM000',
					label: 'Ana Maria Rodriguez Melacontonore'
				}
			]
		}
	},
	{
		dataField: 'type',
		headerStyle,
		style,
		text: 'CENTRO:',
		filter: textFilter(),
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: 'CEMAS',
					label: 'Centro Educativo Manuel Acevedo Serrano'
				},
				{
					value: 'OTRO',
					label: 'Otro'
				}
			]
		}
	},
	{
		dataField: 'type',
		headerStyle,
		style,
		text: 'MODALIDAD:',
		filter: textFilter(),
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: 'TECNICO',
					label: 'TECNICO'
				},
				{
					value: 'GENERAL',
					label: 'GENERAL'
				}
			]
		}
	}
];

let CONSTANTS = { CURSO_COLUMNS };

export default CONSTANTS;
