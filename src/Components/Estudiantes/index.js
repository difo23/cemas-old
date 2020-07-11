/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import API from '../../api';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './estudiante.css';
import EstudianteTabla from './EstudianteTabla';
import { userService, authenticationService } from '../../_services';
import { history } from '../../_helpers';

class Estudiante extends Component {
	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	initialState = () => {
		let initState = {
			currentUser: authenticationService.currentUserValue,
			users: '',
			seccion: 'default',
			grado: 'default',
			periodo: 'default',
			listperEsts: [],
			cursoSelect: {}
		};
		return initState;
	};

	logout() {
		authenticationService.logout();
		history.push('/login');
	}

	getEstudiantes() {
		API.get(`periodos_estudiantes`).then((res) => {
			let perEsts = res.data.estudiantes;
			let listperEsts = [];
			//console.log("Perido estudiantes: "+JSON.stringify(perEsts));
			for (let perEst of perEsts) {
				listperEsts.push({
					curso_periodo: perEst.codigo_calificaciones,
					estudiantes: perEst.estudiantes_inscritos
				});
			}

			console.log('Estudiates: ', listperEsts);

			this.setState({
				listperEsts: listperEsts
			});
		});
	}

	componentDidMount() {
		this.getEstudiantes();
	}

	manejaBuscar = (event) => {
		let grado = this.state.grado;
		let seccion = this.state.seccion;
		let periodo = this.state.periodo;
		let codigo = `${grado}${seccion}:${periodo}`;
		let estudiantes = this.state.listperEsts;

		for (let curso of estudiantes) {
			if (codigo === curso.curso_periodo) {
				this.setState({ cursoSelect: curso, codigo });
				console.log('Curso seleccionado', curso);
			}
		}

		console.log('Codigo a buscar', codigo);
	};

	manejaGrado = (event) => {
		this.setState({ grado: event.target.value });
	};

	manejaSeccion = (event) => {
		this.setState({ seccion: event.target.value });
	};

	manejaPeriodo = (event) => {
		this.setState({ periodo: event.target.value });
	};

	render() {
		const { currentUser, users } = this.state;

		return (
			<div>
				{currentUser && (
					<nav className="navbar navbar-expand navbar-dark bg-dark">
						<div className="navbar-nav">
							<a href={`/`} className="nav-item nav-link">{`Bienvenid@ a BDCEMAS ${this.state.currentUser
								.firstName} ${this.state.currentUser.lastName}`}</a>

							<a href={`/reporte`} className="nav-item nav-link">
								Reporte
							</a>
							<a href={`/`} className="nav-item nav-link">
								Calificaciones
							</a>
							<a onClick={this.logout} className="nav-item nav-link">
								Salir
							</a>
						</div>
					</nav>
				)}
				<div className="jumbotron">
					<div className="form-inline my-2 my-lg-0">
						<h1 className="display-5">ESTUDIANTES:</h1>
						<div className="col-sm-2">
							<select className="form-control" value={this.state.grado} onChange={this.manejaGrado}>
								<option value="default">GRADO</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
							</select>
						</div>
						<div className="col-sm-2">
							<select className="form-control" value={this.state.seccion} onChange={this.manejaSeccion}>
								<option value="default">SECCION</option>
								<option value="A">A</option>
								<option value="B">B</option>
								<option value="C">C</option>
								<option value="D">D</option>
								<option value="E">E</option>
								<option value="F">F</option>
								<option value="G">G</option>
							</select>
						</div>
						<div className="col-sm-2">
							<select className="form-control" value={this.state.periodo} onChange={this.manejaPeriodo}>
								<option value="default">PERIODO</option>
								<option value="2019-2020">2019-2020</option>
								<option value="2020-2021">2020-2021</option>
								<option value="2021-2022">2021-2022</option>
								<option value="2023-2024">2022-2023</option>
								<option value="2025-2026">2023-2024</option>
								<option value="2027-2028">2024-2025</option>
								<option value="2029-2030">2025-2026</option>
							</select>
						</div>
						<div className="col-sm-2">
							<button onClick={this.manejaBuscar} className="btn btn-success">
								Buscar
							</button>
						</div>
					</div>
					<EstudianteTabla
						cursoSelect={this.state.cursoSelect}
						codigo_curso={`${this.state.grado}${this.state.seccion}`}
						codigo_periodo={this.state.periodo}
						codigo_calificaciones={`${this.state.grado}${this.state.seccion}:${this.state.periodo}`}
						titular={`${this.state.currentUser.firstName} ${this.state.currentUser.lastName}-${this.state
							.currentUser.username}`}
					/>
				</div>
			</div>
		);
	}
}

export default Estudiante;
