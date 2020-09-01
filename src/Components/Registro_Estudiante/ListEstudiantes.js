import React from 'react';

import ItemEstudiante from './ItemEstudiante';

const ListEstudiantes = (props) => {
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
			</div>

			<div className="col mt-3">
				<h5>Carta de Info:</h5>
				<ItemEstudiante />
			</div>
		</div>
	);
};

export default ListEstudiantes;
