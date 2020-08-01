import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type }) => {
	return (
		<div className={`alert alert-${type}`} role="alert">
			{`${message}`}
		</div>
	);
};

Alert.propTypes = {
	message: PropTypes.string,
	type: PropTypes.string
};

export default Alert;
