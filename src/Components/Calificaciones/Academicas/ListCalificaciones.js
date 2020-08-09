import React from 'react';

import ItemCalificacion from './ItemCalificacion';

const ListCalificaciones = (props) => {
	return (
		<div className="row mt-3 mb-3">
			<div className="col-sm-3 ml-3">
				<div className="mt-3">
					<h2>
						<span
							style={{
								fontSize: '100px',
								color: 'Dodgerblue'
							}}
						>
							<i className="fas fa-user-graduate" />
						</span>
						<strong> {`#${'1'}`}</strong>
					</h2>
				</div>

				<div className="mt-3">
					<h2>
						{' '}
						<strong> {` Calificación:`}</strong>{' '}
					</h2>
					<h2> {`${'100'}/${'100'}`}</h2>
				</div>
			</div>

			<div className="col mt-3">
				<h5>Calificaciones Mensuales:</h5>
				<ItemCalificacion />
				<ItemCalificacion />
				<ItemCalificacion />
				<ItemCalificacion />
			</div>
		</div>
	);
};

export default ListCalificaciones;
