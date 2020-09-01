import React from 'react';
import Select from 'react-select';

import PropTypes from 'prop-types';
import { blueGrey } from '@material-ui/core/colors';

const Selector = ({ title, value, options, handleChange }) => {

	return (
		<>
			<Select
				onChange={handleChange}
				styles={{
					container: base => ({
						...base,
						backgroundColor: blueGrey,
						padding: 5,
					}),
				}}
				value={value}
				options={options}
				placeholder={title}

			/>
		</>
	)
};

Selector.propTypes = {
	title: PropTypes.string,
	value: PropTypes.object,
	options: PropTypes.array,
	handleChange: PropTypes.func
};

export default Selector;



