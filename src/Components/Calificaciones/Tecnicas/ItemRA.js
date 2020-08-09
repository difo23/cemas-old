import React from 'react';

const ItemRA = () => {
	return (
		<div className="mt-3 mb-3">
		
			<div className="row">
				<div className="col-sm-2">
					<i className="fas fa-registered" />
					<strong> # 1</strong>
				</div>
				<div className="col">
					<input type="text" className="form-control" placeholder="Acumulado" autoComplete="off" />
				</div>
				<div className="col">
					<input type="text" className="form-control" placeholder="Total" autoComplete="off" />
				</div>
			
			</div>
		</div>
	);
};

export default ItemRA;
