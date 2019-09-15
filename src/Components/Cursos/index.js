import React, { Component } from 'react';
import API from '../../api';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import CursoTabla from './CursoTabla';


class Curso extends Component {
	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	initialState = () => {
		let initState = {
		
		};
		return initState;
	};

	getStudents = async (limite) => {
		let res = await API.get('/Curso', {
			params: {
				limite
			}
		});
		console.log(res.data, 'En la promesa');

		return res.data.Cursos;
	};

	componentDidMount() {
		let Cursos = this.getStudents(10);
		this.setState({
			ultimos_Cursos_agregados: Cursos
		});
	}

	manejaCurso = (event) => {
		this.setState({ curso: event.target.value });
	};

	render() {
		console.log(this.state.ultimos_Cursos_agregados, ' En el render');
		return (
			<div>
				<div className="jumbotron">
					<div className="form-inline my-2 my-lg-0">
						<h1 className="display-5">CursoS:</h1>
						<div className="col-sm-3">
							<select className="form-control"
								value={this.state.curso}
								onChange={this.manejaCurso}
								>
								<option value="default">PERIODO</option>
								<option value="2">2018-2019</option>
								<option value="1">2018-2019</option>
								<option value="3">2018-2019</option>
							</select>
						</div>
					</div>
                    <CursoTabla curso= {this.state.curso}/>
                </div>
					
			</div>
		);
	}
}

export default Curso;
