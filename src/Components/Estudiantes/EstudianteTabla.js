import React, { Component } from 'react';
import API from '../../api';
import CONSTANT from './utils/constants';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { getNewRow } from './utils';
import cellEditFactory from 'react-bootstrap-table2-editor';

class EstudianteTabla extends Component {
	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	initialState = () => {
		let initState = {
			cursoSelect: [],
			curso: '',
			columns: CONSTANT.ESTUDIANTES_COLUMNS,
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
			codigo: '',
			ultimos_estudiantes_agregados: [],
			estudiante_editar: {},
			codigo_periodo: '',
			codigo_curso: '',
			titular: '',
			codigo_calificaciones: '',
			estudiantes_inscritos: [],
			rows: [],
			type: 'Estudiante'
		};
		return initState;
	};

	manejaEnvio = () => {
		if (this.state.codigo_calificaciones !== '') {
			let con = confirm('Desea Guardar su calificacion ?');

			let curso_periodo = {
				codigo_periodo: this.state.codigo_periodo,
				codigo_curso: this.state.codigo_curso,
				titular: this.state.titular,
				codigo_calificaciones: this.state.codigo_calificaciones,
				estudiantes_inscritos: this.state.cursoSelect
			};

			if (con) {
				// eslint-disable-next-line no-undef
				API.post('/periodo_estudianten', curso_periodo, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then((res) => {
					console.log('Respuesta ' + res);

					console.log('Respuesta con data ' + res.data);
				});
				alert('Su Calificacion ha sido enviada!');
			}
		}
	};

	addRow = () => {
		let newId = this.state.curso + '-' + (this.state.rows.length + 1);
		let row = getNewRow(this.state.type);
		row.matricula = newId;
		let newData = this.state.rows;
		newData.push(row);
		this.setState({ rows: newData });
	};

	remRow = () => {
		let newData = this.state.rows;
		newData.pop();
		this.setState({ rows: newData });
	};

	componentWillReceiveProps(props) {
		this.setState({
			cursoSelect: props.cursoSelect,
			codigo_curso: props.codigo_curso,
			codigo_periodo: props.codigo_periodo,
			codigo_calificaciones: props.codigo_calificaciones,
			titular: props.titular
		});
	}

	componentDidMount() {}

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
		console.log(this.state.cursoSelect.estudiantes, ' En el render');
		return (
			<div>
				<hr className="my-4" />
				<div class="table-estudiante">
					<BootstrapTable
						striped
						hover
						selectRow={this.selectRow}
						cellEdit={this.cellEdit}
						keyField="matricula"
						data={this.state.cursoSelect.estudiantes || []}
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

export default EstudianteTabla;
