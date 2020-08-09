import { textFilter } from 'react-bootstrap-table2-filter';
import { Type } from 'react-bootstrap-table2-editor';
import getPeriodos from '../../../helpers/getPeridos';

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

const OPTIONS_GRADOS = [ 
	{values:'1', label: '1'}, 
	{values:'2', label: '2'}, 
	{values:'3', label: '3'}, 
	{values:'4', label: '4'}, 
	{values:'5', label: '5'}, 
	{values:'6', label: '6'} 
];
const OPTIONS_SECCIONES = [ 
	{values:'A', label: 'A'}, 
	{values:'B', label: 'B'}, 
	{values:'C', label: 'C'}, 
	{values:'D', label: 'D'}, 
	{values:'E', label: 'E'}, 
	{values:'F', label: 'F'}  
];
const OPTIONS_PERIODOS = getPeriodos();

export {
	
	MAESTROS_COLUMNS,
	OPTIONS_PERIODOS,
	OPTIONS_SECCIONES,
	OPTIONS_GRADOS

};
