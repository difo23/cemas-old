import React, { Component } from 'react';
import API from '../../api';
import CONSTANT from './utils/constants';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { getNewRow } from './utils';
import cellEditFactory from 'react-bootstrap-table2-editor';

class AsignaturaTabla extends Component {
	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	initialState = () => {
		let initState = {
			curso: '6B201920',
			columns: CONSTANT.ASIGNATURAS_COLUMNS,
			nombre: '',
			email: '',
			rne: '',
			matricula: '',
			edad: '',
			apellido: '',
			img: '',
			telefono_tutor: '',
			nombre_tutor: '',
			fecha_nacimiento: '',
			sexo: '',
			codigo_curso_activo: '',
			ultimos_Asignaturas_agregados: [],
			Asignatura_editar: {},
			rows: [],
			type: 'Asignatura'
		};
		return initState;
	};

	addRow = () => {
		let newId = this.state.curso + '-' + (this.state.rows.length + 1);
		let row = getNewRow(this.state.type);
		row.curso = newId;
		let newData = this.state.rows;
		newData.push(row);
		this.setState({ rows: newData });
	};

	remRow = () => {
		let newData = this.state.rows;
		newData.pop();
		this.setState({ rows: newData });
	};

	getStudents = async (limite) => {
		let res = await API.get('/Asignatura', {
			params: {
				limite
			}
		});
		console.log(res.data, 'En la promesa');

		return res.data.Asignaturas;
	};

	componentDidMount() {
		let Asignaturas = this.getStudents(10);
		this.setState({
			ultimos_Asignaturas_agregados: Asignaturas
		});
	}

	cellEdit = cellEditFactory({
		mode: 'click',
		blurToSave: true,
		beforeSaveCell: (oldValue, newValue, row, column) => {},
		validator: (newValue, row, column) => {
			return true;
		},

		afterSaveCell: (oldValue, newValue, row, column) => {
			// let type = this.state.type;
			// let rows = this.state.rows;
			// let newcarry = this.state.carry;
			// //let newData = updateRow(type, row, rows);
			// this.setState({
			// 	rows: newData,
			// });
		}
	});

	render() {
		console.log(this.state.ultimos_Asignaturas_agregados, ' En el render');
		return (
			<div>
				<hr className="my-4" />
				<div class="table-Asignatura">
					<BootstrapTable
						striped
						hover
						selectRow={this.selectRow}
						cellEdit={this.cellEdit}
						keyField="curso"
						data={this.state.rows}
						filter={filterFactory()}
						columns={this.state.columns}
						noDataIndication="La tabla esta vacia"
					/>
				</div>
				<hr className="my-4" />
				<div className="form-inline my-2 my-lg-0">
					<div>
						<button onClick={this.manejaEnvio} className="btn btn-primary">
							Enviar
						</button>
					</div>
					<div>
						<button onClick={this.addRow} className="btn btn-success">
							Agregar Nuevo
						</button>
					</div>
					<div>
						<button onClick={this.remRow} className="btn btn-danger">
							Eliminar Ultimo
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default AsignaturaTabla;
