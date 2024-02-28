import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Alert({ type, msg, removeAlert, list }) {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => clearTimeout(timeout);
	}, [list]);
	return <p className={`alert alert-${type}`}>{msg}</p>;
}

Alert.propTypes = {
	type: PropTypes.string.isRequired,
	msg: PropTypes.string.isRequired,
	removeAlert: PropTypes.func.isRequired,
	list: PropTypes.array.isRequired,
};
