import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import rgbToHex from '../../utils/utils_9';

function SingleColor({ rgb, weight, index, hexColor }) {
	const bgC = rgb.join(',');
	const hex = rgbToHex(...rgb);
	const hexValue = `#${hexColor}`;
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [alert]);

	return (
		//when color is click hex value is copied to clipboard
		<article
			className={`color ${index > 10 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${bgC})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
				//https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
				//Clipboard API, which can be used to implement cut, copy, and paste features within a web application.
			}}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexValue}</p>
			{alert && <p className="alert">Copied to Clipboard</p>}
		</article>
	);
}

SingleColor.propTypes = {
	rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
	weight: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
	hexColor: PropTypes.string.isRequired,
};

export default SingleColor;
