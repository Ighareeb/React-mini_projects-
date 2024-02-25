import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Tour({ id, image, info, name, price, removeTour }) {
	const [readMore, setReadMore] = useState(false);

	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">${price}</h4>
				</div>
				<p>
					{readMore ? info : `${info.substring(0, 200)}...`}
					<button onClick={() => setReadMore(!readMore)}>
						{readMore ? 'show less' : ' read more'}
					</button>
				</p>
				<button className="delete-btn" onClick={() => removeTour(id)}>
					Not Interested
				</button>
			</footer>
		</article>
	);
}

Tour.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	removeTour: PropTypes.func.isRequired,
};
