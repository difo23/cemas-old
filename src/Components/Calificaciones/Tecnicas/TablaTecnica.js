import React from 'react';
import ListRA from './ListRA';

const TablaTecnica = () => {
	return (
		<div>
			<ListRA />
			<ListRA />
			<hr style={{ border: '1px solid gray' }} />

			<div className="col-sm mt-3">
				<button alt="Guardar" className="btn btn-block btn-outline-danger ml-1">
					<i className="fas fa-cloud-upload-alt" />
				</button>
			</div>
			<hr style={{ border: '1px solid green' }} />
		</div>
	);
};

export default TablaTecnica;
