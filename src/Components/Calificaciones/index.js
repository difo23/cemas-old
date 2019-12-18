import React, { Component } from 'react';
import Tabla from './TablaGeneral';
import './index.css';
import API from '../../api';

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
			listAsignaturasOptions: [],
			listAsignaturas: [],
			listCursosOptions: [],
			listCursos: [],
			listAsigAcadsOptions: [],
			listAsigAcads: []
		};
	}

	componentDidMount() {
		
		let asigAcads = [];
		var listAsigAcadsOptions =[]
		var listAsigAcads = []
		var cursos = [];
		var asignaturas = [];
		var listCursosOptions = [];
		var listCursos = [];

		API.get(
			`asignaturas_academicas`		
		).then((res) => {
			 
			asigAcads = res.data.asignaturas_academicas;
			console.log(asigAcads)
			for(let asigAcad of asigAcads){
				listAsigAcads.push(asigAcad.cursos_profesor);
			}

			console.log(listAsigAcads)
			for (var lists of listAsigAcads){
				listAsigAcadsOptions.push(lists.map((list) =>
				<option value= {list.profesor}>{list.profesor}</option>
			));
			}
			this.setState({ listAsigAcadsOptions: listAsigAcadsOptions, listAsigAcads: listAsigAcads });
		});

		API.get(
			`cursos`		
		).then((res) => {
			 
			cursos = res.data.cursos;
			for(let curso of cursos){
				asignaturas.push(curso.asignaturas);
			}

		

			listCursosOptions= cursos.map((curso) =>
				<option value= {curso.codigo_curso}>{curso.codigo_curso}</option>
			);
			listCursos= cursos.map((curso) =>
				curso.codigo_curso
			);
			

			this.setState({ cursos: cursos, asignaturas: asignaturas, listCursosOptions: listCursosOptions, listCursos: listCursos });
		});

		
	}

	manejaCalificaciones = (event) => {
		this.setState({ tipoTabla: event.target.value });
	};

	manejaCurso = (event) => {
		
		
		const asignaturasUpdate =this.state.asignaturas ;
		
		const cursos = this.state.listCursos;
		const indx = cursos.indexOf(event.target.value);
		var listAsignaturasOptions= [];

		
		if(indx >=0){
			 const asigs = asignaturasUpdate[indx];
			listAsignaturasOptions = asigs.map((asig) =>
		 		<option value= {asig}>{asig}</option>
			);
		 }
		this.setState({ curso: event.target.value, listAsignaturasOptions: listAsignaturasOptions });
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
										{this.state.listAsigAcadsOptions}
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
