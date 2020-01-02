import React, { Component } from 'react';
import API from '../../api';

class Reporte extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curso: 'default',
			periodo: 'default',
			listCursosOptions: []
		};
	}

	componentDidMount() {
		var cursos = [];
		var listCursosOptions = [];

		API.get(`cursos`).then((res) => {
			cursos = res.data.cursos;
			listCursosOptions = cursos.map((curso) => <option value={curso.codigo_curso}>{curso.codigo_curso}</option>);

			this.setState({
				listCursosOptions: listCursosOptions
			});
		});
	}

	manejaCurso = (event) => {
		let curso = event.target.value;
		this.setState({
			curso: curso
		});
	};

	manejaPeriodo = (event) => {
		let periodo = event.target.value;
		this.setState({
			periodo: periodo
		});
	};

	manejaEnvio = (event) => {
		alert('Maneja Envio');
		let reportes = [];
		let curso = this.state.curso;
		let periodo = this.state.periodo;

		API.get(`reportes`).then((res) => {
			reportes = [];
			let boletin = [];
			let curso_r, periodo_r, rne;

			for (let reporte of res.data.reportes) {
				boletin = reporte.boletin.split(':')[(curso_r, periodo_r, rne)] = boletin;

				if (curso_r == curso && periodo_r == periodo) {
					reportes.push(reporte);
				}
			}
			console.log('Reportes GET ' + JSON.stringify(reportes));
			this.setState({
				reportes: reportes
			});
		});
	};

	render() {
		return (
			<div>
				<div className="jumbotron">
					<div className="form-inline my-2 my-lg-0">
						<h1 className="display-5">Reporte:</h1>
					</div>

					<hr className="my-4" />
					<div className="form-inline my-3 my-lg-0">
						<div className="container">
							<div className="row">
								<div className="col-sm-2">
									<select
										className="form-control"
										value={this.state.curso}
										onChange={this.manejaCurso}
									>
										<option value="default">COD. CURSO</option>
										{this.state.listCursosOptions}
									</select>
								</div>
								<div className="col-sm-2">
									<select
										className="form-control"
										value={this.state.periodo}
										onChange={this.manejaPeriodo}
									>
										<option value="default">PERIODO</option>
										<option value="2019-2020">2019-2020</option>
										<option value="2020-2021">2020-2021</option>
									</select>
								</div>
								<div className="col-sm-2">
									<button className="btn btn-success" onClick={this.manejaEnvio}>
										Buscar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Reporte;
