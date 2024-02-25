import PropTypes from 'prop-types';
import Tour from './Tour';

export default function Tours({ tours, removeTour }) {
	return (
		<section>
			<div className="title">
				<h2>Our Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
				})}
			</div>
		</section>
	);
}

Tours.propTypes = {
	tours: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			info: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
		}),
	).isRequired,
	removeTour: PropTypes.func.isRequired,
};
