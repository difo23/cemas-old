import React, { useState } from 'react';
import Selector from '../helpers/Selector';
//import PropTypes from 'prop-types';

const FormCurso = (props) => {

	const [state, setstate] = useState({
		value: 0
	})

	const handleChange = (event) => {
		event.preventDefault()
		console.log(event.target)

		setstate({ value: event.target.value })
	}
	return (
		<form>
			<div className="col mt-3 mr-3 mb-3">
				<h5>Curso Titular: </h5>
			</div>

			<div className=" row   mt-3">
				<div className="col-sm-3 mt-1">
					<Selector title="Grado" name="grados" option="1" arr={[]} handleChange={handleChange} />
				</div>

				<div className="col-sm-3 mt-1">
					<Selector title="Sección" name="secciones" option={'A'} arr={[]} handleChange={handleChange} />
				</div>

				<div className="col-sm-3 mt-1">
					<Selector title="Periodo" name="periodos" option="2020-2021" arr={[]} handleChange={handleChange} />
				</div>
				<div className="col-sm-3 mt-1">
					<input
						type="number"
						name="estudiantes"
						value={state.value}
						id="estudiantes"
						placeholder="#Estudiantes"
						className="form-control"
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="form-group row mt-4">
				<label htmlFor="static1" className="col-sm-3 col-form-label">
					Código auto-generado:
				</label>
				<div className="col-sm-4">
					<input
						type="text"
						readOnly
						className="form-control-plaintext"
						id="static1"
						value="25:6F:2020-2021:MMRD:CEMAS"
					/>
				</div>

				<div className="col-sm-2">
					<button type="button" className="btn btn-block btn-outline-danger">
						<i className="fas fa-cloud-upload-alt" />
					</button>
				</div>
			</div>
		</form>
	);
};

FormCurso.propTypes = {};

export default FormCurso;
