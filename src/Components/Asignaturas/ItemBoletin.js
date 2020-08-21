import React from 'react';
import { Link } from 'react-router-dom';

const ItemBoletin = ({ boletin }) => {
	return (
		<div key={boletin.code}>
			<div className="row mt-3">
				<div className="col-sm-6 mt-4">
					<span> {boletin.codigo_calificacion}</span>
				</div>

				<div className="col-sm-3 mt-3 ">
					<button className="btn btn-block btn-outline-danger ">
						<i className=" fas fa-trash-alt" />
					</button>
				</div>

				<div className="col-sm-3 mt-3 ">
					{/* <button  className="btn btn-block btn-outline-success ">
					Calificar
				</button> */}

					<Link
						className="btn btn-block btn-outline-success"
						to={{
							pathname: '/calificaciones',
							search: 'search',
							hash: 'hash',
							state: { fromDashboard: boletin.modalidad, estudiante: boletin.estudiantes, ra: boletin.ra }
						}}
					>
						Calificar{' '}
					</Link>
				</div>
			</div>
			<hr style={{ border: '1px solid gray' }} />
		</div>
	);
};

ItemBoletin.propTypes = {};

export default ItemBoletin;
