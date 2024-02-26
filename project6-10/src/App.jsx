// //------------------- 7. SLIDER -------------------
// // note --> components are not actually used...they are alternative code options for the same app.
// // note2 --> modulo % is used to to check/ensure that index wraps around the last item in array when it reaches index[-1]
import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data_7';

export default function App() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex((prev) => prev + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, []);

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
				<button className="prev" onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={() => setIndex(index + 1)}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

// //------------------- 6. JOB TABS -------------------
// import { useState, useEffect } from 'react';
// import { FaAngleDoubleRight } from 'react-icons/fa';
// const url = 'https://course-api.com/react-tabs-project'; //tabs data

// export default function App() {
// 	const [jobs, setJobs] = useState([]);
// 	const [value, setValue] = useState(0);
// 	const [loading, setLoading] = useState(true);

// 	const fetchJobs = async () => {
// 		const res = await fetch(url);
// 		const jobsData = await res.json();
// 		setJobs(jobsData);
// 		setLoading(false);
// 	};

// 	useEffect(() => {
// 		fetchJobs();
// 	}, []);

// 	if (loading) {
// 		return (
// 			<section className="section loading">
// 				<h1>Loading Jobs data...</h1>
// 			</section>
// 		);
// 	}

// 	const { company, dates, duties, title } = jobs[value];

// 	return (
// 		<section className="section">
// 			<div className="title">
// 				<h2>Experiance</h2>
// 				<div className="underline"></div>
// 			</div>
// 			<div className="jobs-center">
// 				{/* btn container */}
// 				<div className="btn-container">
// 					{jobs.map((job, index) => {
// 						return (
// 							<button
// 								key={job.id}
// 								className={`job-btn $[index === value && 'active-btn']`}
// 								onClick={() => setValue(index)}
// 							>
// 								{job.company}
// 							</button>
// 						);
// 					})}
// 				</div>
// 				{/* job info */}
// 				<article className="job-info">
// 					<h3>{title}</h3>
// 					<h4>{company}</h4>
// 					<p className="job-date">{dates}</p>
// 					{duties.map((duty, index) => {
// 						return (
// 							<div className="job-desc" key={index}>
// 								<FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
// 								<p>{duty}</p>
// 							</div>
// 						);
// 					})}
// 				</article>
// 			</div>
// 			<button className="btn" type="button">
// 				More Info
// 			</button>
// 		</section>
// 	);
// }
