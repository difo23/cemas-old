/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import CentroTabla from './CentroTabla';

class Centro extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="jumbotron">
					<div className="form-inline my-2 my-lg-0">
						<h1 className="display-5">CENTROS:</h1>
					</div>
					<CentroTabla />
				</div>
			</div>
		);
	}
}

export default Centro;
