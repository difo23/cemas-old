import React, { Component } from 'react';
import Tabla from './TablaGeneral';
import './index.css';
import API from '../../api';
import CalificacionGeneral from './utils/calificacionGeneral';
import CalificacionTecnico from './utils/calificacionTecnica';
import CalificacionExtraordinaria from './utils/calificacionExtraordinaria';
import CalificacionCompletivo from './utils/calificacionCompletivo';

class Calificaciones extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tipoTabla: '0',
			curso: 'default',
			maestro: 'default',
			asignatura: 'default',
			periodo: 'default',
			cursos: [],
			asignaturas: [],
			profesores: [],
			listAsignaturasOptions: [],
			listAsignaturas: [],
			listCursosOptions: [],
			listCursos: [],
			listAsigAcadsOptions: [],
			listAsigAcads: [],
			listperEsts: [],
			listCalificaciones: [],
			calificaciones: [],
			estudiantesList: [],
			cantidad_estudiantes: 0,
			update_calificaciones: false,
			listProfesoresOptions: []
		};
	}

	naturalCompare(a, b) {
		var ax = [], bx = [];
	
		a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
		b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });
		
		while(ax.length && bx.length) {
			var an = ax.shift();
			var bn = bx.shift();
			var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
			if(nn) return nn;
		}
	
		return ax.length - bx.length;
	}

	componentDidMount() {
		// let asigAcads = [];
		// var listAsigAcadsOptions = [];
		var listAsigAcads = [];
		var cursos = [];
		var asignaturas = [];
		var profesores =[];
		var listCursosOptions = [];
		var listCursos = [];
		var perEsts = [];
		var listperEsts = [];
		var listCalificaciones = [];

		API.get(`calificaciones`).then((res) => {
			listCalificaciones = res.data.calificaciones;

			this.setState({ listCalificaciones: listCalificaciones });
		});

		// API.get(`asignaturas_academicas`).then((res) => {
		// 	asigAcads = res.data.asignaturas_academicas;
		// 	//console.log("Asignaturas Academicas: "+JSON.stringify(asigAcads));
		// 	for (let asigAcad of asigAcads) {
		// 		listAsigAcads.push(asigAcad.cursos_profesor);
		// 	}

		// 	//console.log(listAsigAcads);
		// 	for (var lists of listAsigAcads) {
		// 		listAsigAcadsOptions.push(lists.map((list) => <option value={list.profesor}>{list.profesor}</option>));
		// 	}
		// 	this.setState({ listAsigAcadsOptions: listAsigAcadsOptions, 
		// 		listAsigAcads: listAsigAcads });
		// });

		API.get(`periodos_estudiantes`).then((res) => {
			perEsts = res.data.estudiantes;

			//console.log("Perido estudiantes: "+JSON.stringify(perEsts));
			for (let perEst of perEsts) {
				listperEsts.push({
					curso_periodo: perEst.codigo_calificaciones,
					estudiantes: perEst.estudiantes_inscritos
				});
			}

			this.setState({ listperEsts: listperEsts });
		});

		API.get(`cursos`).then((res) => {
			cursos = res.data.cursos.sort(this.naturalCompare).reverse();
			for (let curso of cursos) {
				asignaturas.push(curso.asignaturas);
				profesores.push(curso.profesores);
			}

			listCursosOptions = cursos.map((curso) => <option value={curso.codigo_curso}>{curso.codigo_curso}</option>);
			listCursos = cursos.map((curso) => curso.codigo_curso);

			this.setState({
				cursos: cursos,
				asignaturas: asignaturas,
				profesores: profesores,
				listCursosOptions: listCursosOptions,
				listCursos: listCursos
			});
		});
	}

	manejaCalificaciones = (event) => {
		this.setState({ tipoTabla: event.target.value });
	};

	manejaCurso = (event) => {
		const asignaturasUpdate = this.state.asignaturas;
		const profesoresUpdate = this.state.profesores;
		const cursos = this.state.listCursos;
		const indx = cursos.indexOf(event.target.value);
		var listAsignaturasOptions = [];
		var listProfesoresOptions = [];

		if (indx >= 0) {
			const asigs = asignaturasUpdate[indx];
			const profs = profesoresUpdate[indx]
			listAsignaturasOptions = asigs.map((asig) => <option value={asig}>{asig}</option>);
			listProfesoresOptions = profs.map((prof) => <option value={prof}>{prof}</option>);
		}
		this.setState({ curso: event.target.value, 
			listAsignaturasOptions: listAsignaturasOptions,
			listProfesoresOptions: listProfesoresOptions
		 });
	};

	manejaMaestro = (event) => {
		this.setState({ maestro: event.target.value });
	};

	manejaAsignatura = (event) => {
		this.setState({ asignatura: event.target.value });
	};

	manejaEnvio = (event) => {
		API.get(`calificaciones`).then((res) => {
			listCalificaciones = res.data.calificaciones;

			this.setState({ listCalificaciones: listCalificaciones });
		});

		let perEsts = this.state.listperEsts;
		let len = 0;
		let curso = this.state.curso;
		let asignatura = this.state.asignatura;
		let maestro = this.state.maestro;
		let periodo = this.state.periodo;
		let tipo = this.state.tipoTabla;
		let calificaciones = [];

		let codigo_calificacion = `${curso}:${asignatura}:${maestro}:${periodo}:${tipo}`;

		let listCalificaciones = this.state.listCalificaciones;
		for (let calificacion of listCalificaciones) {
			if (codigo_calificacion === calificacion.codigo_calificacion) {
				calificaciones = calificacion.calificacion_estudiantes;
			}
		}

		let estudiantesList = [];

		if (curso != 'default') {
			for (var perEst of perEsts) {
				let cursoPerido = perEst.curso_periodo.split(':');
				let cursoEst = cursoPerido[0];
				let peridoEst = cursoPerido[1];

				if (periodo == peridoEst && cursoEst == curso) {
					estudiantesList = perEst.estudiantes;
					len = estudiantesList.length;
					break;
				}
			}
		}

		let newCalificaciones = [];

		if (!calificaciones.length) {
			for (let estudiante of estudiantesList) {
				let calif = [];

				switch (this.state.tipoTabla) {
					case '0':
						calif = new CalificacionGeneral(estudiante.numero, estudiante.rne, 0, 0, 0, 0, 0);
						break;
					case '1':
						console.log('Calificaciones Completiva');
						calif = new CalificacionCompletivo(estudiante.numero, estudiante.rne, 0, 0, 0, 0);
						break;
					case '2':
						console.log('Calificaciones Extraordinaria');
						calif = new CalificacionExtraordinaria(estudiante.numero, estudiante.rne, 0, 0, 0, 0);
						break;
					case '3':
						console.log('Calificaciones tecnicas');
						calif = new CalificacionTecnico(estudiante.numero, estudiante.rne, 0 /*, 0*/, 0);
						break;
					default:
				}

				newCalificaciones.push(calif);
			}

			calificaciones = newCalificaciones;
		}

		alert('Nueva busqueda! Codigo: ' + codigo_calificacion);
		this.setState({
			periodo: periodo,
			estudiantesList: estudiantesList,
			cantidad_estudiantes: len,
			calificaciones: calificaciones
		});
	};

	manejaPeriodo = (event) => {
		let periodo = event.target.value;
		this.setState({
			periodo: periodo
		});
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
										{this.state.listCursosOptions}
									</select>
								</div>
								<div className="col-sm-3">
									<select
										className="form-control"
										value={this.state.asignatura}
										onChange={this.manejaAsignatura}
									>
										<option value="default">COD. ASIGNATURA</option>
										{this.state.listAsignaturasOptions}
									</select>
								</div>
								<div className="col-sm-3">
									<select
										className="form-control"
										value={this.state.maestro}
										onChange={this.manejaMaestro}
									>
										<option value="default">COD. MAESTRO</option>
										{this.state.listProfesoresOptions}
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
							maestro={this.state.maestro}
							periodo={this.state.periodo}
							cantidad_estudiantes={this.state.cantidad_estudiantes}
							estudiantes={this.state.estudiantesList}
							calificaciones={this.state.calificaciones}
						/>
					</div>
					<hr className="my-4" />
				</div>
			</div>
		);
	}
}

export default Calificaciones;
