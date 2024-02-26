import PropTypes from 'prop-types';
export default function Categories({ categories, filterItems }) {
	return (
		<div className="btn-container">
			{categories.map((category, index) => {
				return (
					<button
						key={index}
						type="button"
						className="filter-btn"
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
}
Categories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string).isRequired,
	filterItems: PropTypes.func.isRequired,
};
