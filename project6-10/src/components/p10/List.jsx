import { FaEdit, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';

function List({ items, removeItems, editItem }) {
	return (
		<div className="grocery-list">
			{items.map((item) => {
				const { id, title } = item;
				return (
					<article className="grocery-item" key={id}>
						<p className="title">{title}</p>
						<div className="btn-container">
							<button
								className="edit-btn"
								type="button"
								onClick={() => editItem(id)}
							>
								<FaEdit />
							</button>
							<button
								className="delet-btn"
								type="button"
								onClick={() => removeItems(id)}
							>
								<FaTrash />
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
}

List.propTypes = {
	items: PropTypes.array.isRequired,
	removeItems: PropTypes.func.isRequired,
	editItem: PropTypes.func.isRequired,
};

export default List;
