import { textFilter } from 'react-bootstrap-table2-filter';
import { Type, cellEditFactory } from 'react-bootstrap-table2-editor';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

let headerStyle = {
	backgroundColor: 'yellow',
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

const CENTRO_COLUMNS = [
	{
		dataField: 'codigo',
		text: 'codigo:',
		headerStyle,
		style,
		filter: textFilter() // apply text filter
	},
	{
		dataField: 'nombre',
		text: 'NOMBRE:',
		headerStyle,
		style
	},
	{
		dataField: 'siglas',
		text: 'siglas:',
		headerStyle,
		style
	},

	{
		dataField: 'telefono',
		headerStyle,
		style,
		text: 'TELEFONO:'
	},
	{
		dataField: 'profesores_link',
		headerStyle,
		style: {
			fontWeight: 'boldest',
			fontSize: '14px',
			color: 'blue',
			'word-wrap': 'break-word',
			'text-decoration': 'underline'
		},
		text: 'MAESTROS:',
		editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
			// eslint-disable-next-line react/react-in-jsx-scope
			<Link to={`/maestro/`} style={{ color: 'purple' }}>
				Ir a Maestros
			</Link>
		)
	},
	{
		dataField: 'cursos_link',
		headerStyle,
		style: {
			fontWeight: 'boldest',
			fontSize: '14px',
			color: 'blue',
			'word-wrap': 'break-word',
			'text-decoration': 'underline'
		},
		text: 'CURSOS:',
		editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
			// eslint-disable-next-line react/react-in-jsx-scope
			<Link to={`/cursos/`} style={{ color: 'purple' }}>
				Ir a Cursos
			</Link>
		)
	},
	{
		dataField: 'estudiantes_link',
		headerStyle,
		style: {
			fontWeight: 'boldest',
			fontSize: '14px',
			color: 'blue',
			'word-wrap': 'break-word',
			'text-decoration': 'underline'
		},
		text: 'Estudiantes:',
		editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
			// eslint-disable-next-line react/react-in-jsx-scope
			<Link to={`/estudiantes/`} style={{ color: 'purple' }}>
				Ir a Estudiantes
			</Link>
		)
	},
	{
		dataField: 'asignaturas_link',
		headerStyle,
		style: {
			fontWeight: 'boldest',
			fontSize: '14px',
			color: 'blue',
			'word-wrap': 'break-word',
			'text-decoration': 'underline'
		},
		text: 'ASIGNATURAS:',
		editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
			// eslint-disable-next-line react/react-in-jsx-scope
			<Link to={`/asignaturas/`} style={{ color: 'purple' }}>
				Ir a Asignaturas
			</Link>
		)
	},
	{
		dataField: 'editar_link',
		headerStyle,
		style: {
			fontWeight: 'boldest',
			fontSize: '14px',
			color: 'blue',
			'word-wrap': 'break-word',
			'text-decoration': 'underline'
		},
		text: 'Editar:',
		editorRenderer: (editorProps, value, row, column, rowIndex, columnIndex) => (
			// eslint-disable-next-line react/react-in-jsx-scope
			<Link to={`/editar/`} style={{ color: 'purple' }}>
				Ir a Editar
			</Link>
		)
	}
];

let CONSTANTS = { CENTRO_COLUMNS };

export default CONSTANTS;
