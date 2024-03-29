import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../../assets/data_7';

export default function AlternativeTwo() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	const nextPerson = () => {
		setIndex((prev) => {
			let index = (prev + 1) % people.length;

			return index;
		});
	};
	const prevPerson = () => {
		setIndex((prev) => {
			let index = ((prev - 1 + people.length) % people.length) - 1;

			return index;
		});
	};

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex((prev) => {
				let index = (prev + 1) % people.length;
				return index;
			});
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	return (
		<section className="section">
			<div className="title">
				<h2>
					<span>/</span>reviews
				</h2>
			</div>
			<div className="section-center">
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					let position = 'nextSlide';

					if (personIndex === index) {
						position = 'activeSlide';
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = 'lastSlide';
					}

					return (
						<article className={position} key={id}>
							<img src={image} alt={name} className="person-img" />
							<h4>{name}</h4>
							<p className="title">{title}</p>
							<p className="text">{quote}</p>
							<FaQuoteRight className="icon" />
						</article>
					);
				})}
				<button className="prev" onClick={prevPerson}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={nextPerson}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}
