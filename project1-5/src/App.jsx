// //--------TOURS APP 2--------//
import { useState, useEffect } from 'react';
import Loading from './components/Loading_2';
import Tours_2 from './components/Tours_2';

const url = 'https://course-api.com/react-tours-project'; //tour data

export default function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchTours = async () => {
		setLoading(true);
		try {
			const res = await fetch(url);
			const tourData = await res.json();
			setLoading(false);
			setTours(tourData);
		} catch (err) {
			setLoading(false);
			console.log(`Error: ${err} - Unable to fetch Tour data`);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading)
		return (
			<main>
				<Loading />
			</main>
		);
	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>No Tours Available</h2>
					<button className="btn" onClick={() => fetchTours()}>
						Refresh Tour List
					</button>
				</div>
			</main>
		);
	}
	return (
		<main>
			<Tours_2 tours={tours} removeTour={removeTour} />
		</main>
	);
}

// //--------BIRTHDAY REMINDER APP 1--------//
// import { useState } from 'react';
// import data from './assets/data_1';

// import './App.css';
// import List from './components/List_1';

// function App() {
// 	const [people, setPeople] = useState(data);

// 	return (
// 		<main>
// 			<section className="container">
// 				<h3>{people.length} birthdays today</h3>
// 				<List people={people} />
// 				<button onClick={() => setPeople([])}>Clear All</button>
// 			</section>
// 		</main>
// 	);
// }

// export default App;
