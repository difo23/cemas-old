import { textFilter } from 'react-bootstrap-table2-filter';

let headerStyle = {
	backgroundColor: '#c8e6c9',
	fontWeight: 'boldest',
	fontSize: '14px',
	color: 'black'
};

let style = {
	fontWeight: 'boldest',
	fontSize: '14px',
	color: 'black',
	wordWrap: 'break-word'
};

const PARCIAL_COLUMNS = [
	{
		dataField: 'numero',
		text: 'NUMERO:',
		//filter: textFilter(), // apply text filter
		headerStyle,
		style
	},
	// {
	// 	dataField: 'rne',
	// 	text: 'RNE:',
	// 	filter: textFilter(),
	// 	headerStyle,
	// 	style
	// },
	{
		dataField: 'ago_sept_oct',
		text: 'AGO-SEPT-OCT:',
		headerStyle,
		style
	},
	{
		dataField: 'nov_dic_ene',
		text: 'NOV-DIC-ENE:',
		headerStyle,
		style
	},
	{
		dataField: 'feb_mar',
		text: 'FEB-MAR:',
		headerStyle,
		style
	},
	{
		dataField: 'abr_may_jun',
		text: 'ABR-MAY-JUN:',
		headerStyle,
		style
	},

	{
		dataField: 'cf',
		text: 'C.F:',
		editable: false,
		headerStyle,
		style: {
			fontWeight: 'boldest',
			fontSize: '18px',
			backgroundColor: '#F8e6c9',
			color: 'black'
		}
	}
];

let TECNICA_COLUMNS = [
	{
		dataField: 'numero',
		text: 'NUMERO:',
		editable: false,
		//filter: textFilter(), // apply text filter
		headerStyle,
		style
	},
	// {
	// 	dataField: 'rne',
	// 	text: 'RNE:',
	// 	editable: true,
	// 	//filter: textFilter(),
	// 	headerStyle,
	// 	style
	// },
	{
		dataField: 'acumulado',
		text: 'Acumulado:',
		headerStyle,
		style
	} /*,
	{
		dataField: 'ras',
		text: ' #RAs:',
		headerStyle,
		style
	}*/,

	{
		dataField: 'total',
		text: 'Total:',
		headerStyle,
		style: {
			fontWeight: 'boldest',
			fontSize: '24px',
			backgroundColor: '#F8e6c9',
			color: 'black'
		}
	}
];

const COMPLETIVA_COLUMNS = [
	{
		dataField: 'numero',
		text: 'NUMERO:',
		filter: textFilter(), // apply text filter
		headerStyle,
		style
	},
	// {
	// 	dataField: 'rne',
	// 	text: 'RNE:',
	// 	filter: textFilter(),
	// 	headerStyle,
	// 	style
	// },
	{
		dataField: 'pcp_50',
		text: '50% P.C.P:',
		headerStyle,
		style
	},
	{
		dataField: 'cpc',
		text: 'C.P.C:',
		headerStyle,
		style
	},
	{
		dataField: 'cpc_50',
		text: '50% C.P.C:',
		editable: false,
		headerStyle,
		style
	},
	{
		dataField: 'cf',
		text: 'C.C:',
		editable: false,
		headerStyle,
		style: {
			fontWeight: 'boldest',
			fontSize: '24px',
			backgroundColor: '#F8e6c9',
			color: 'black'
		}
	}
];

const EXTRAORDINARIA_COLUMNS = [
	{
		dataField: 'numero',
		text: 'NUMERO:',
		filter: textFilter(), // apply text filter
		headerStyle,
		style
	},
	{
		dataField: 'rne',
		text: 'RNE:',
		filter: textFilter(),
		headerStyle,
		style
	},
	{
		dataField: 'pcp_30',
		text: '30% P.C.P:',
		headerStyle,
		style
	},
	{
		dataField: 'cpex',
		text: 'C.P.EX:',
		headerStyle,
		style
	},
	{
		dataField: 'cpex_70',
		text: '70% C.P.EX:',
		editable: false,
		headerStyle,
		style
	},
	{
		dataField: 'cf',
		text: 'C.EX:',
		editable: false,
		headerStyle,
		style: {
			fontWeight: 'boldest',
			fontSize: '24px',
			backgroundColor: '#F8e6c9',
			color: 'black'
		}
	}
];

// const ASISTENCIA_COLUMNS = [
// 	{
// 		dataField: 'id',
// 		text: ''
// 		//filter: textFilter()
// 	},
// 	{
// 		dataField: 'estado',
// 		text: 'Estado (P, T, E, A):'
// 	},
// 	{
// 		dataField: 'observaciones',
// 		text: 'Observaciones:'
// 	}
// ];

// const SITUACION_FINAL_COLUMNS = [
// 	{
// 		dataField: 'id',
// 		text: ''
// 		//filter: textFilter()
// 	},
// 	{
// 		dataField: 'a',
// 		text: 'A:'
// 	},
// 	{
// 		dataField: 'r',
// 		text: 'R:'
// 	}
// ];

// const CAP_COLUMNS = [
// 	{
// 		dataField: 'id',
// 		text: ''
// 		//	filter: textFilter()
// 	},
// 	{
// 		dataField: 'oportunidad1',
// 		text: '1:'
// 	},
// 	{
// 		dataField: 'oportunidad2',
// 		text: '2:'
// 	}
// ];

export const getColumns = (type) => {
	switch (type) {
		case 'GENERALES':
			return PARCIAL_COLUMNS;

		case 'EXTRAORNIDARIAS':
			return EXTRAORDINARIA_COLUMNS;
		case 'COMPLETIVAS':
			return COMPLETIVA_COLUMNS;
		case 'TECNICAS':
			return TECNICA_COLUMNS;

		default:
			break;
	}
};
