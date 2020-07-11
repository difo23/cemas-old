import { textFilter } from 'react-bootstrap-table2-filter';
import { Type } from 'react-bootstrap-table2-editor';

let headerStyle =  {
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

const ESTUDIANTES_COLUMNS = [
	{
		dataField: 'numero',
		text: 'NUMERO',
		headerStyle,
		style,
		filter: textFilter() // apply text filter
	},
	{
		dataField: 'rne',
		headerStyle,
		style,
		text: 'RNE:',
		filter: textFilter()
	},
	{
		dataField: 'nombres',
		headerStyle,
		style,
		text: 'Nombres:'
	},
	{
		dataField: 'apellidos',
		headerStyle,
		style,
		text: 'Apellidos:'
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
    options: [{
      value: 'M',
      label: 'Masculino'
    }, {
      value: 'F',
      label: 'Femenino'
    }]
  }
	},
	{
		dataField: 'telefono',
		headerStyle,
		style,
		text: 'Telefono:'
	}
];

let CONSTANTS = { ESTUDIANTES_COLUMNS };

export default CONSTANTS;
