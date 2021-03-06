import React from 'react';

import FormEstudiante from './FormEstudiante';

const ItemEstudiante = (props) => {


	const handleChange = (estudiante) => {
		props.handleChange(estudiante);
	}



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
						<strong> {`#${props.estudiante.numero}`}</strong>
					</h2>
				</div>
			</div>
			<div className="col mt-3">
				<h5>Carta de Info:</h5>

				<FormEstudiante handleChange={handleChange} estudiante={props.estudiante} />

			</div>
		</div>

	);
};

export default ItemEstudiante;
