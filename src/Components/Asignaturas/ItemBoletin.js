import React from 'react';
import { Link } from 'react-router-dom';

const ItemBoletin = (props) => {
	return (
		<div>
			<div className="row mt-3">
				<div className="col-sm-2">
					<span> {'codigo boletín asignatura'}</span>
				</div>
				<div className="col-sm-2">
					<span> {`${'grado'}${'seccion'}`}</span>
				</div>
				<div className="col-sm-2">
					<span> {`periodo`}</span>
				</div>
				<div className="col-sm-2">
					<span> {`Modalidad`}</span>
				</div>
				<div className="col-sm-2 mt-2 ">
					<button className="btn btn-block btn-outline-danger ">
						<i className=" fas fa-trash-alt" />
					</button>
				</div>

				<div className="col-sm-2 mt-2 ">
					{/* <button  className="btn btn-block btn-outline-success ">
					Calificar
				</button> */}

					<Link
						className="btn btn-block btn-outline-success"
						to={{
							pathname: '/calificaciones',
							search: '?sort=name',
							hash: '#the-hash',
							state: { fromDashboard: false }
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
