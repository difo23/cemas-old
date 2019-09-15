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

const ASIGNATURAS_COLUMNS = [
	{
		dataField: 'curso',
		text: 'curso',
		headerStyle,
		style,
		filter: textFilter() // apply text filter
	},
	{
		dataField: 'profesor',
		headerStyle,
		style,
		filter: textFilter(),
		text: 'PROFESOR:',
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: 'JAPEREZD000',
					label: 'Juan Alonzo Perez Difo'
				},
				{
					value: 'AMARMOLEJOSG000',
					label: 'Ana Marmolejos Guzman'
				}
			]
		}
	},
	{
		dataField: 'nombre',
		headerStyle,
		style,
		text: 'Asignatura:',
		filter: textFilter(),
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: 'TECNICA',
					label: 'TECNICA'
				},
				{
					value: 'GENERAL',
					label: 'GENERAL'
				}
			]
		}
	},
	{
		dataField: 'horas_semanales',
		headerStyle,
		style,
		text: 'HORAS SEMANALES:'
	},
	{
		dataField: 'modalidad',
		headerStyle,
		style,
		text: 'MODALIDAD:',
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: 'TECNICA',
					label: 'TECNICA'
				},
				{
					value: 'GENERAL',
					label: 'GENERAL'
				}
			]
		}
	},
	{
		dataField: 'ras',
		headerStyle,
		style,
		text: 'RA:'
	},
	{
		dataField: 'estado',
		headerStyle,
		style,
		text: 'ESTADO:',
		editor: {
			type: Type.SELECT,
			options: [
				{
					value: 'ACTIVA',
					label: 'ACTIVA'
				},
				{
					value: 'DESACTIVADA',
					label: 'DESACTIVADA'
				}
			]
		}
	}
];

let CONSTANTS = { ASIGNATURAS_COLUMNS };

export default CONSTANTS;
