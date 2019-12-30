import { textFilter } from 'react-bootstrap-table2-filter';

const TITULO_CLASSNAME = 'EstudentLabel';
const TITULO_TEXT = 'Registro Academico:';

const TABLA_TYPE = {
	PARCIAL: '0',
	COMPLETIVA: '1',
	EXTRAORDINARIA: '2',
	SITUACIONFINAL: '6',
	CAP: '4',
	ASISTENCIA: '5',
	TECNICA: '3'
};

const SELECTOR_TYPE = {
	GRADO: '0',
	SECCION: '1',
	MODALIDAD: '2',
	PROFESOR: '3',
	PERIODO_ESCOLAR: '4',
	CENTRO_EDUCATIVO: '5',
	ASIGNATURA: '6'
};

const SELECTOR_TITLE = {
	GRADO: 'Grado',
	SECCION: 'Seccion',
	MODALIDAD: 'Modalidad',
	PROFESOR: 'Profesor',
	PERIODO_ESCOLAR: 'Periodo',
	CENTRO_EDUCATIVO: 'Centro',
	ASIGNATURA: 'Asignatura'
};

const GRADO_OPTIONS = [ '-', '1', '2', '3', '4', '5', '6' ];

const MODALIDAD_OPTIONS = [ '-', 'GENERAL', 'ELECTRICO', 'INFORMATICO', 'CONTABILIDAD', 'TURISMO', 'MERCADEO' ];

const MODALIDAD_SELECT_OPTIONS = {
	GENERAL: '1',
	TECNICO_ELECTR: '2',
	TECNICO_INF: '3',
	TECNICO_CONTA: '4',
	TECNICO_TURIS: '5',
	TECNICO_MER: '6'
};

const ASIGNATURA_GENERAL_OPTIONS = [
	'-',
	'MATEMATICAS',
	'ESPAÑOL',
	'SOCIALES',
	'QUIMICA',
	'FISICA',
	'BIOLOGIA',
	'INGLES'
];

const ASIGNATURA_TECNICO_ELECTR_OPTIONS = [ '-', 'PLC', 'CONTROLES', 'HIDRAULICA' ];

const ASIGNATURA_TECNICO_INF_OPTIONS = [ '-', 'BASE DE DATOS', 'DESARROLLO DE APLICACIONES', 'REDES', 'PAGINAS WEB' ];

const ASIGNATURA_TECNICO_CONTA_OPTIONS = [ '-', 'CONTABILIDAD' ];

const ASIGNATURA_TECNICO_TURIS_OPTIONS = [ '-', 'TURISMO' ];

const ASIGNATURA_TECNICO_MER_OPTIONS = [ '-', 'MERCADEO' ];

const SECCION_OPTIONS = [ '-', 'A', 'B', 'C', 'D', 'E', 'F', 'H' ];

const PROFESOR_GENERAL_OPTIONS = [ '-', 'Juan General', '', '', '', '', '' ];

const PROFESOR_TECNICO_ELECTR_OPTIONS = [ '-', 'Migel Electrico', '', '', '', '', '' ];

const PROFESOR_TECNICO_CONTA_OPTIONS = [ '-', 'Pedro Contabilidad', '', '', '', '', '' ];

const PROFESOR_TECNICO_TURIS_OPTIONS = [ '-', 'Juana Turismo', '', '', '', '', '' ];

const PROFESOR_TECNICO_MER_OPTIONS = [ '-', 'Maria Mercadeo', '', '', '', '', '' ];

const PROFESOR_TECNICO_INF_OPTIONS = [ '-', 'Maria Mercadeo', '', '', '', '', '' ];

const PERIODO_ESCOLAR_OPTIONS = [ '-', '2018-19', '', '', '', '', '' ];

const CENTRO_EDUCATIVO_OPTIONS = [ '-', 'CEMAS', '', '', '', '', '' ];

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

const PARCIAL_COLUMNS = [
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
		editable: false,
		filter: textFilter(),
		headerStyle,
		style
	},
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
			fontSize: '24px',
			backgroundColor: '#F8e6c9',
			color: 'black'
		  }
	}
];

let TECNICA_COLUMNS = [
	{
		dataField: 'numero',
		text: '#',
		headerStyle,
		style
	},
	{
		dataField: 'ra1',
		text: 'RA1%:',
		headerStyle,
		style
	},
	{
		dataField: 'ra2',
		text: 'RA2%:',
		headerStyle,
		style
	},
	{
		dataField: 'ra3',
		text: 'RA3%:',
		headerStyle,
		style
	},
	{
		dataField: 'ra4',
		text: 'RA4%:',
		headerStyle,
		style
	},
	{
		dataField: 'ra5',
		text: 'RA5%:',
		headerStyle,
		style
	},
	{
		dataField: 'ra6',
		text: 'RA6%:',
		headerStyle,
		style
	},
	{
		dataField: 'ra7',
		text: 'RA7%:',
		headerStyle,
		style
	},
	{
		dataField: 'ra8',
		text: 'RA8%:',
		headerStyle,
		style
	},
	{
		dataField: 'ra9',
		text: 'RA9%:',
		headerStyle,
		style
	},

	{
		dataField: 'calificacionFinal',
		text: 'C.F:',
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

const COMPLETIVA_COLUMNS = [
	{
		dataField: 'id',
		text: '',
		filter: textFilter(),
		headerStyle,
		style
	},
	{
		dataField: 'pcp_50',
		text: '50% P.C.P:',
		editable: false,
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
		dataField: 'cc',
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
		text: '',
		filter: textFilter(),
		headerStyle,
		style
	},
	{
		dataField: 'pcp_30',
		text: '30% P.C.P:',
		editable: false,
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
		dataField: 'cex',
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

const ASISTENCIA_COLUMNS = [
	{
		dataField: 'id',
		text: '',
		filter: textFilter()
	},
	{
		dataField: 'estado',
		text: 'Estado (P, T, E, A):'
	},
	{
		dataField: 'observaciones',
		text: 'Observaciones:'
	}
];

const SITUACION_FINAL_COLUMNS = [
	{
		dataField: 'id',
		text: '',
		filter: textFilter()
	},
	{
		dataField: 'a',
		text: 'A:'
	},
	{
		dataField: 'r',
		text: 'R:'
	}
];

const CAP_COLUMNS = [
	{
		dataField: 'id',
		text: '',
		filter: textFilter()
	},
	{
		dataField: 'oportunidad1',
		text: '1:'
	},
	{
		dataField: 'oportunidad2',
		text: '2:'
	}
];

let CONSTANTS = {
	TITULO_CLASSNAME,
	TITULO_TEXT,
	TABLA_TYPE,
	SELECTOR_TYPE,
	SELECTOR_TITLE,
	GRADO_OPTIONS,
	MODALIDAD_OPTIONS,
	ASIGNATURA_GENERAL_OPTIONS,
	ASIGNATURA_TECNICO_ELECTR_OPTIONS,
	ASIGNATURA_TECNICO_INF_OPTIONS,
	ASIGNATURA_TECNICO_CONTA_OPTIONS,
	ASIGNATURA_TECNICO_TURIS_OPTIONS,
	ASIGNATURA_TECNICO_MER_OPTIONS,
	PROFESOR_GENERAL_OPTIONS,
	MODALIDAD_SELECT_OPTIONS,
	PROFESOR_TECNICO_ELECTR_OPTIONS,
	PROFESOR_TECNICO_CONTA_OPTIONS,
	PROFESOR_TECNICO_TURIS_OPTIONS,
	PROFESOR_TECNICO_MER_OPTIONS,
	PROFESOR_TECNICO_INF_OPTIONS,
	PERIODO_ESCOLAR_OPTIONS,
	CENTRO_EDUCATIVO_OPTIONS,
	SECCION_OPTIONS,
	PARCIAL_COLUMNS,
	TECNICA_COLUMNS,
	CAP_COLUMNS,
	SITUACION_FINAL_COLUMNS,
	COMPLETIVA_COLUMNS,
	EXTRAORDINARIA_COLUMNS,
	ASISTENCIA_COLUMNS
};

export default CONSTANTS;
