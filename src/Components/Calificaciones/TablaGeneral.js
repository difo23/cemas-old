import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';
import React, { Component } from 'react';
import { getNewColumns, updateRow } from './utils';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import API from '../../api';
import BootstrapTable from 'react-bootstrap-table-next';
import XLSX from 'xlsx';
import { make_cols } from './MakeColumns';
import { SheetJSFT } from './types';


class TablaGeneral extends Component {
	constructor(props) {
		super(props);

		const tipos = [ 'GENERAL', 'COMPLETIVA', 'EXTRAORDINARIA', 'TECNICA' ];

		this.state = {
			file: {},
			data: [],
			cols: [],
			docs: false,
			columns: getNewColumns(props.tipoTabla),
			type: props.tipoTabla,
			tipos: tipos,
			curso: props.curso,
			asignatura: props.asignatura,
			maestro: props.maestro,
			periodo: props.periodo,
			cantidad_estudiantes: props.cantidad_estudiantes,
			estudiantes: props.estudiantes
		};
	}

	componentWillMount() {}

	componentWillReceiveProps(props) {
		this.setState({
			file: {},
			data: [],
			cols: [],
			rows: props.calificaciones,
			columns: getNewColumns(props.tipoTabla),
			type: props.tipoTabla,
			curso: props.curso,
			asignatura: props.asignatura,
			maestro: props.maestro,
			periodo: props.periodo,
			cantidad_estudiantes: props.cantidad_estudiantes,
			estudiantes: props.estudiantes
		});
	}

	manejaEnvio = (event) => {
		event.preventDefault();
		
		let calificaciones = {
			calificacion_estudiantes: this.state.rows,
			estado: 'true',
			modalidad: this.state.tipos[parseInt(this.state.type)],
			codigo_curso: this.state.curso,
			codigo_asignatura: this.state.asignatura,
			codigo_maestro: this.state.maestro,
			codigo_periodo: this.state.periodo,
			codigo_calificacion: `${this.state.curso}:${this.state.asignatura}:${this.state.maestro}:${this.state
				.periodo}:${this.state.type}`
		};
		// console.log("En el post mensaje a enviar "+JSON.stringify(calificaciones))
		let con = false;
		// eslint-disable-next-line no-restricted-globals
		con = confirm('Desea Guardar su calificacion ?');

		if (con) {
			API.post('/calificacion', calificaciones, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).then((res) => {
				console.log('Respuesta ' + res);

				console.log('Respuesta con data ' + res.data);
			});
			alert('Su Calificacion ha sido enviada!');
		}
	};
	
	
	handleChange = (e)=> {
		const files = e.target.files;
		if (files && files[0]) this.setState({ file: files[0] });
	  }
	
	  handleFile= () => {
		/* Boilerplate to set up FileReader */
		const reader = new FileReader();
		const rABS = !!reader.readAsBinaryString;
	
		reader.onload = e => {
		  /* Parse data */
		  const bstr = e.target.result;
		  const wb = XLSX.read(bstr, {
			type: rABS ? "binary" : "array",
			bookVBA: true
		  });
		  /* Get first worksheet */
		  const wsname = wb.SheetNames[0];
		  const ws = wb.Sheets[wsname];
		  /* Convert array of arrays */
		  const data = XLSX.utils.sheet_to_json(ws);
		  /* Update state */
		  this.setState({ rows: data, cols: make_cols(ws["!ref"]), docs: true }, () => {
			console.log(JSON.stringify(this.state.data, null, 2));
		  });
		};
	
		if (rABS) {
		  reader.readAsBinaryString(this.state.file);
		} else {
		  reader.readAsArrayBuffer(this.state.file);
		}
	  }
	

	cellEdit = cellEditFactory({
		mode: 'click',
		autoSelectText: true,
		blurToSave: true,
		beforeSaveCell: (oldValue, newValue, row, column) => {},
		validator: (newValue, row, column) => {
			return true;
		},

		afterSaveCell: (oldValue, newValue, row, column) => {
			let type = this.state.type;
			let rows = this.state.rows;
			let newData = updateRow(type, row.numero, rows);

			this.setState({
				rows: newData
			});
			console.log('Estado actualizado', this.state);
		}
	});

	render() {
		return (
			<div>
				<div>
					<BootstrapTable
						striped
						hover
						selectRow={this.selectRow}
						cellEdit={this.cellEdit}
						keyField="numero"
						data={this.state.rows || []}
						filter={filterFactory()}
						columns={this.state.columns}
					/>
				</div>
				<div>
					<hr className="" />
					<div>
						<h3 htmlFor="file">Subir Archivo Excel:</h3>
					
						<input
						type="file"
						
						id="file"
						accept={SheetJSFT}
						onChange={this.handleChange}
						/>
						
						<input
						className="btn btn-info"
						type="submit"
						value="Actualizar"
						onClick={this.handleFile}
						/>
					</div>
					<hr className="my-4" />
					<div>
						<button onClick={this.manejaEnvio} className="btn btn-primary">
							Enviar
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default TablaGeneral;
