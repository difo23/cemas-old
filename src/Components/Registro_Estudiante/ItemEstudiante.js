import React from 'react';
import Selector from '../helpers/Selector';

const ItemEstudiantes = ({ estudiante }) => {
	return (
		<div className="mt-3 mb-3">
			<div className="row mt-3">
				<div className="col-sm mt-3">
					<input type="text" className="form-control" placeholder="Nombres" autoComplete="off" />
				</div>
				<div className="col-sm mt-3">
					<input type="text" className="form-control" placeholder="Apellidos" autoComplete="off" />
				</div>
			</div>

			<div className="row ">
				<div className="col-sm mt-3">
					<input type="text" className="form-control" placeholder="Correo" autoComplete="off" />
				</div>
				<div className="col-sm mt-3">
					<input
						type="tel"
						className="form-control"
						placeholder="Cel, Ejem: 8096557898  "
						autoComplete="off"
					/>
				</div>
			</div>

			<div className="row ">
				<div className="col-sm mt-3">
					<Selector title="Sexo" name="grados" option="1" arr={[]} />
				</div>
				<div className="col-sm mt-3">
					<Selector title="Edad" name="edad" option="1" arr={[]} />
				</div>
				<div className="col-sm mt-3">
					<input type="date" className="form-control" autoComplete="off" placeholder="Fecha de nacimiento" />
				</div>
			</div>
		</div>
	);
};

export default ItemEstudiantes;
