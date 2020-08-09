import React from 'react';

import ItemRA from './ItemRA';

const ListRA = (props) => {
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

				<div className="row">
					<div className="col mb-3">
						<button type="button" className="btn btn-block btn-outline-primary">
							<i className="fas fa-plus" />
						</button>
					</div>

					<div className="col mb-3">
						<button className="btn btn-block btn-outline-danger ">
							<i className=" fas fa-trash-alt" />
						</button>
					</div>
				</div>
			</div>

			<div className="col mt-3">
				<h1>RAs:</h1>
				<ItemRA />
				<ItemRA />
				<ItemRA />
				<ItemRA />
			</div>
		</div>
	);
};

export default ListRA;
