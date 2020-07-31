import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({ name, option, arr, handleChange }) => {
	return (
		<div>
			<div className="col-sm-3">
				<select value={option} name={name} onChange={handleChange} className="form-control">
					{arr.map((type) => {
						return (
							<option key={type} value={type}>
								{type}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

Selector.propTypes = {
	name: PropTypes.string.isRequired,
	option: PropTypes.string.isRequired,
	arr: PropTypes.array,
	handleChange: PropTypes.func
};

export default Selector;
