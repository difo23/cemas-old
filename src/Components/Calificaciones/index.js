import React, { Component } from 'react';
import Tabla from './TablaGeneral';
import './index.css'

class Calificaciones extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tipoTabla: '0',
			curso: 'default',
			maestro: 'default',
			asignatura: 'default',
			periodo: 'default'
		};
	}

	manejaCalificaciones = (event) => {
		this.setState({ tipoTabla: event.target.value });
	};

	manejaCurso = (event) => {
		this.setState({ curso: event.target.value });
	};

	manejaMaestro = (event) => {
		this.setState({ maestro: event.target.value });
	};

	manejaAsignatura = (event) => {
		this.setState({ asignatura: event.target.value });
	};
	manejaPeriodo = (event) => {
		this.setState({ periodo: event.target.value });
	};

	render() {
		
		return (
			<div>
				<div className="jumbotron">
					<div className="form-inline my-2 my-lg-0">
						<h1 className="display-5">Calificaciones:</h1>
						<div className="col-sm-3">
							<select
								value={this.state.tipoTabla}
								onChange={this.manejaCalificaciones}
								className="form-control"
							>
								<option value="0">GENERALES</option>
								<option value="2">EXTRAORDINARIA</option>
								<option value="1">COMPLETIVA</option>
								<option value="3">TECNICAS</option>
							</select>
						</div>
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
										<option value="6B201819">6B201819</option>
									</select>
								</div>
								<div className="col-sm-3">
									<select
										className="form-control"
										value={this.state.maestro}
										onChange={this.manejaMaestro}
									>
										<option value="default">COD. MAESTRO</option>
										<option value="LJRAMIREZD2019">LJRAMIREZD2019</option>
									</select>
								</div>
								<div className="col-sm-3">
									<select
										className="form-control"
										value={this.state.asignatura}
										onChange={this.manejaAsiganatura}
									>
										<option value="default">COD. ASIGNATURA</option>
										<option value="MAT001">MAT001</option>
									</select>
								</div>
								<div className="col-sm-2">
									<select
										className="form-control"
										value={this.state.periodo}
										onChange={this.manejaPeriodo}
									>
										<option value="default">PERIODO</option>
										<option value="2018-2019">20182019</option>
									</select>
								</div>
								<div className="col-sm-2">
						<button onClick={this.manejaEnvio} className="btn btn-success">
							Buscar
						</button>
						
					</div>
							</div>
						</div>
					</div>

					<hr className="" />
					<div>
						<Tabla
							tipoTabla={this.state.tipoTabla}
							curso={this.state.curso}
							asignatura={this.state.asignatura}
							materia={this.state.materia}
							periodo={this.state.periodo}
						/>
					</div>
					<hr className="my-4" />
				</div>
			</div>
		);
	}
}

export default Calificaciones;
