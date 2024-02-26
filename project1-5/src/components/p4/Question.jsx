import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Question({ title, info }) {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showInfo && <p>{info}</p>}
		</article>
	);
}

Question.propTypes = {
	title: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
};
