import React from 'react';
import Selector from '../helpers/Selector';
//import PropTypes from 'prop-types';

const FormAsignaturas = ({ handleChange }) => {
	return (
		<form>
			<div className="row">
				<div className="col">
					<Selector
						title="Nombre completo de la asignatura"
						name="grados"
						option="1"
						arr={[]}
						handleChange={handleChange}
					/>
				</div>
			</div>

			<div className="row mt-3 mb-3">
				<div className="col-sm-2">
					<h5>Modalidad: </h5>
				</div>

				<div className="col-sm-3">
					<Selector title="Modalidad" name="grados" option="1" arr={[]} handleChange={handleChange} />
				</div>
			</div>

			<div className=" row form-inline  my-lg-0 mt-3">
				<div className="col-sm-2">
					<h5>Curso: </h5>
				</div>

				<div className="col-sm-3">
					<Selector title="Grado" name="grados" option="1" arr={[]} handleChange={handleChange} />
				</div>

				<div className="col-sm-3">
					<Selector title="Sección" name="secciones" option={'A'} arr={[]} handleChange={handleChange} />
				</div>

				<div className="col-sm-3">
					<Selector title="Periodo" name="periodos" option="2020-2021" arr={[]} handleChange={handleChange} />
				</div>
			</div>

			<div className="form-group row mt-4">
				<label htmlFor="static1" className="col-sm-3 col-form-label">
					Código auto-generado:
				</label>
				<div className="col-sm-4">
					<input type="text" readOnly className="form-control-plaintext" id="static1" value="ESPA000" />
				</div>

				<div className="col-sm-2">
					<button type="button" className="btn btn-block btn-outline-primary">
						<i className="fas fa-plus" />
					</button>
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

FormAsignaturas.propTypes = {};

export default FormAsignaturas;
