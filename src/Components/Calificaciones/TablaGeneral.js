import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';
import React, { Component } from 'react';
import { getNewColumns, updateRow } from './utils';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import API from '../../api';
import BootstrapTable from 'react-bootstrap-table-next';


class TablaGeneral extends Component {
	constructor(props) {
		super(props);

		this.tipos = ["calif_general","calif_completiva","calif_extraordinaria","calif_tecnica"];

		this.state = {
			rows: [],
			columns: getNewColumns(props.tipoTabla),
			type: props.tipoTabla,
			cantidad_estudiantes: props.cantidad_estudiantes,
			estudiantes: props.estudiantes

		};
	}

	componentWillMount() {}

	componentWillReceiveProps(props) {
		this.setState({
			rows: props.data,
			columns: getNewColumns(props.tipoTabla),
			type: props.tablaType,
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

		const calificaciones = {

			calificaciones: this.state.data,
			tipo: this.state.tablaType,
			codigo_curso: this.state.curso,
			codigo_materia: this.state.asignatura,
			codigo_maestro: this.state.maestro,
			periodo: this.state.periodo
		};

		API.post(`${this.tipos[parseInt(this.state.type)]}s`, { calificaciones }).then((res) => {
			console.log(res);
			console.log(res.data);
		});
	};
//?${this.state.curso}&${this.state.asignatura}&${this.state.maestro}&${this.state.periodo}`
//`${this.tipos[parseInt(this.state.tipo)]}/1`
	componentDidMount() {
		API.get(
			`${this.tipos[parseInt(this.state.type)]}/1`
			
		).then((res) => {
			 
			this.setState({ rows: res.data.calificaciones });
		});
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
