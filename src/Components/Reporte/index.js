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
			cursos = res.data.cursos.sort();
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

	manejaGenerar = (event) => {
		if (this.state.curso != 'default' && this.state.periodo != 'default') {
			alert(`Actualizado el reporte de notas ${this.state.curso}${this.state.periodo}.pdf `);
			API.get(`reportes/${this.state.curso}/${this.state.periodo}`).then((res) => {
				console.log('Reporte creado en BD');
				alert(`Recoleccion de calificaciones terminada!`);
			});
			API.get(`pdf/${this.state.curso}/${this.state.periodo}`).then((res) => {
				console.log('Archivo PDF creado en servidor');
				alert(`PDF actualizado! ${this.state.curso}${this.state.periodo}.pdf ya puedes obtener el reporte `);
			});
		} else {
			alert('Debes elegir un curso y periodo para obtener un reporte!');
		}
	};
	//TODO

	manejaObtener = (event) => {
		if (this.state.curso != 'default' && this.state.periodo != 'default') {
			alert(
				'Se abrira una nueva ventana con el reporte! Si obtienes un PDF en blanco o el logo del centro, recuerda actualizar las calificaciones'
			);
			let url = `https://cemasfront.herokuapp.com/file/${this.state.curso}/${this.state.periodo}`;

			window.open(url);
		} else {
			alert('Debes elegir un curso y periodo para obtener un reporte! ');
		}
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
									<button className="btn btn-success" onClick={this.manejaGenerar}>
										Genera PDF
									</button>
								</div>
							</div>
							<hr className="my-4" />
							<div className="col-sm-2">
								<button className="btn  btn-danger" onClick={this.manejaObtener}>
									Obtener PDF
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Reporte;
