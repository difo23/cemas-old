import React from 'react';
import Select from 'react-select';

import PropTypes from 'prop-types';

const Selector = ({ title, name, options, arr, handleChange }) => {
  	
	return (
		<>
			<Select options={options} placeholder= {title} />
		</>
	) 
};

Selector.propTypes = {
	name: PropTypes.string,
	options: PropTypes.object,
	arr: PropTypes.array,
	handleChange: PropTypes.func
};

export default Selector;



