import React, { Component } from 'react';
import CONSTANT from './utils/constants';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { getNewRow } from './utils';
import cellEditFactory from 'react-bootstrap-table2-editor';

class CentroTabla extends Component {
	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	initialState = () => {
		let initState = {
			Centro: '6B201920',
			periodo: '2018-2019',
			columns: CONSTANT.CENTRO_COLUMNS,
			codigo_centro_activo: '',
			ultimos_centros_agregados: [],
			rows: [],
			type: 'centro'
		};
		return initState;
	};

	addRow = () => {
		let newId = this.state.codigo + '-' + (this.state.rows.length + 1);
		let row = getNewRow(this.state.type);
		row.periodo = newId;
		let newData = this.state.rows;
		newData.push(row);
		this.setState({ rows: newData });
	};

	remRow = () => {
		alert('Vas a eliminar datos?');
		let newData = this.state.rows;
		newData.pop();
		this.setState({ rows: newData });
	};

	componentDidMount() {}

	cellEdit = cellEditFactory({
		mode: 'click',
		blurToSave: true,
		beforeSaveCell: (oldValue, newValue, row, column) => {},
		validator: (newValue, row, column) => {
			return true;
		},

		afterSaveCell: (oldValue, newValue, row, column) => {}
	});

	selectRow = {
		mode: 'checkbox',
		headerColumnStyle: {
			backgroundColor: '#c8e6c9'
		},
		bgColor: '#FBCFD8',
		onSelect: (row, isSelect, rowIndex, e) => {
			console.log(row.id);
			console.log(isSelect);
			console.log(rowIndex);
			console.log(e);
		},
		onSelectAll: (isSelect, rows, e) => {
			console.log(isSelect);
			console.log(rows);
			console.log(e);
		}
	};

	render() {
		return (
			<div>
				<hr className="my-4" />
				<div class="table-Centro">
					<BootstrapTable
						striped
						hover
						cellEdit={this.cellEdit}
						selectRow={this.selectRow}
						keyField="periodo"
						data={this.state.rows}
						filter={filterFactory()}
						columns={this.state.columns}
						noDataIndication="La tabla esta vacia"
					/>
				</div>
				<hr className="my-4" />
				<div className="form-inline my-2 my-lg-0">
					<div>
						<button onClick={this.addRow} className="btn btn-success">
							Agregar Nuevo
						</button>
					</div>
					<div>
						<button onClick={this.remRow} className="btn btn-danger">
							Eliminar Seleccion
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CentroTabla;
