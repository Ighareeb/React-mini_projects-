// //------------------- 10. GROCERY LIST -------------------
import { useState, useEffect } from 'react';
import List from './components/p10/List';
import Alert from './components/p10/Alert';

const getLocalStorage = () => {
	let list = localStorage.getItem('list');
	if (list) {
		return (list = JSON.parse(localStorage.getItem('list')));
	} else {
		return [];
	}
};

export default function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, 'danger', 'please enter value');
		} else if (name && isEditing) {
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				}),
			);
			setName('');
			setEditID(null);
			setIsEditing(false);
			showAlert(true, 'success', 'value changed');
		} else {
			showAlert(true, 'success', 'item added to the list');
			const newItem = { id: new Date().getTime().toString(), title: name };

			setList([...list, newItem]);
			setName('');
		}
	};

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg });
	};

	const clearList = () => {
		showAlert(true, 'danger', 'empty list');
		setList([]);
	};

	const removeItem = (id) => {
		showAlert(true, 'danger', 'item removed');
		setList(list.filter((item) => item.id !== id));
	};

	const editItem = (id) => {
		const specificItem = list.find((item) => item.id === id);
		setIsEditing(true);
		setEditID(id);
		setName(specificItem.title);
	};

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	return (
		<section className="section-center">
			<form onSubmit={handleSubmit} className="grocery-form">
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

				<h3>Grocery List</h3>
				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="e.g. milk"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<button className="submit-btn" type="submit">
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<div className="grocery-container">
					<List items={list} removeItem={removeItem} editItem={editItem} />
					<button className="clear-btn" onClick={clearList}>
						Clear List
					</button>
				</div>
			)}
		</section>
	);
}

// //------------------- 9. COLOR GENERATOR -------------------
// import { useState } from 'react';
// import SingleColor from './components/p9/SingleColor';
// import Values from 'values.js';

// export default function App() {
// 	const [color, setColor] = useState('');
// 	const [error, setError] = useState(false);
// 	//create new instance of Values object and use 'all' to generate palette tints/shades with 10 steps for range between base color and white (for tints) or black (for shades). --> creates array of color objects representing tint or shade of base color. -- each object included RGB, HSL and hex values + wieght (% of distance from base color to white or black)
// 	const [list, setList] = useState(new Values('#f15025').all(10));

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		try {
// 			let colors = new Values(color).all(10);
// 			setList(colors);
// 		} catch (err) {
// 			setError(true);
// 			console.log(err);
// 		}
// 	};
// 	return (
// 		<>
// 			<section className="container">
// 				<h3>Color Generator</h3>
// 				<form onSubmit={handleSubmit}>
// 					<input
// 						type="text"
// 						value={color}
// 						onChange={(e) => setColor(e.target.value)}
// 						placeholder="#f15025"
// 						className={`${error ? 'error' : null}`}
// 					/>
// 					<button className="btn" type="submit">
// 						Submit
// 					</button>
// 				</form>
// 			</section>
// 			<section className="colors">
// 				{list.map((color, index) => {
// 					return (
// 						<SingleColor
// 							key={index}
// 							{...color}
// 							index={index}
// 							hexColor={color.hex}
// 						/>
// 					);
// 				})}
// 			</section>
// 		</>
// 	);
// }

// //------------------- 8. Lorem Ipsum generator -------------------
// import { useState } from 'react';
// import data from './assets/data_8';

// export default function App() {
// 	const [count, setCount] = useState(0);
// 	const [text, setText] = useState([]);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		let amount = count;
// 		if (count <= 0) {
// 			amount = 1;
// 		}
// 		if (count > 8) {
// 			amount = 8;
// 		}
// 		setText(data.slice(0, amount));
// 	};
// 	return (
// 		<section className="section-center">
// 			<h3>Lorem Ipsum Generator</h3>
// 			<form onSubmit={handleSubmit} className="lorem-form">
// 				<label htmlFor="amount">paragraphs:</label>
// 				<input
// 					type="number"
// 					name="amount"
// 					id="amount"
// 					value={count}
// 					onChange={(e) => setCount(parseInt(e.target.value))}
// 				/>
// 				<button className="btn">GENERATE</button>
// 			</form>
// 			<article className="lorem-text">
// 				{text.map((item, index) => {
// 					return <p key={index}>{item}</p>;
// 				})}
// 			</article>
// 		</section>
// 	);
// }

// //------------------- 7. SLIDER -------------------
// // note --> components are not actually used...they are alternative code options for the same app.
// // note2 --> modulo % is used to to check/ensure that index wraps around the last item in array when it reaches index[-1]
// import { useState, useEffect } from 'react';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';
// import data from './data_7';

// export default function App() {
// 	const [people, setPeople] = useState(data);
// 	const [index, setIndex] = useState(0);

// 	useEffect(() => {
// 		const lastIndex = people.length - 1;
// 		if (index < 0) {
// 			setIndex(lastIndex);
// 		}
// 		if (index > lastIndex) {
// 			setIndex(0);
// 		}
// 	}, [index, people]);

// 	useEffect(() => {
// 		let slider = setInterval(() => {
// 			setIndex((prev) => prev + 1);
// 		}, 5000);
// 		return () => {
// 			clearInterval(slider);
// 		};
// 	}, []);

// 	return (
// 		<section className="section">
// 			<div className="title">
// 				<h2>
// 					<span>/</span>reviews
// 				</h2>
// 			</div>
// 			<div className="section-center">
// 				{people.map((person, personIndex) => {
// 					const { id, image, name, title, quote } = person;

// 					let position = 'nextSlide';
// 					if (personIndex === index) {
// 						position = 'activeSlide';
// 					}
// 					if (
// 						personIndex === index - 1 ||
// 						(index === 0 && personIndex === people.length - 1)
// 					) {
// 						position = 'lastSlide';
// 					}

// 					return (
// 						<article className={position} key={id}>
// 							<img src={image} alt={name} className="person-img" />
// 							<h4>{name}</h4>
// 							<p className="title">{title}</p>
// 							<p className="text">{quote}</p>
// 							<FaQuoteRight className="icon" />
// 						</article>
// 					);
// 				})}
// 				<button className="prev" onClick={() => setIndex(index - 1)}>
// 					<FiChevronLeft />
// 				</button>
// 				<button className="next" onClick={() => setIndex(index + 1)}>
// 					<FiChevronRight />
// 				</button>
// 			</div>
// 		</section>
// 	);
// }

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
