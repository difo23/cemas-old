import React from 'react';

const ItemCalificacion = () => {
	return (
		<div className="mt-3 mb-3">
			<div className="row">
				<div className="col-sm-2">
					<i className="fas fa-apple-alt" />
					<strong> # 1</strong>
				</div>
				<div className="col-sm-4">
					<input type="text" className="form-control" placeholder="Calificación" autoComplete="off" />
				</div>
			</div>
		</div>
	);
};

export default ItemCalificacion;
