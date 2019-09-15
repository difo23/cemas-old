import React, { Component } from 'react';
import API from '../../api';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './asignatura.css';
import AsignaturaTabla from './AsignaturaTabla';

class Asignatura extends Component {
	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	initialState = () => {
		let initState = {};
		return initState;
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

	manejaCurso = (event) => {
		this.setState({ curso: event.target.value });
	};

	render() {
		console.log(this.state.ultimos_Asignaturas_agregados, ' En el render');
		return (
			<div>
				<div className="jumbotron">
					<div className="form-inline my-2 my-lg-0">
						<h1 className="display-5">AsignaturaS:</h1>
						<div className="col-sm-3">
							<select className="form-control" value={this.state.curso} onChange={this.manejaCurso}>
								<option value="default">CODIGO DE CURSO</option>
								<option value="2">6B201819</option>
								<option value="1">5B201819</option>
								<option value="3">4B201819</option>
							</select>
						</div>
					</div>
					<AsignaturaTabla curso={this.state.curso} />
				</div>
			</div>
		);
	}
}

export default Asignatura;
