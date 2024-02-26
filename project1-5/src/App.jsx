// // //--------ACCORDION 4--------//
import { useState } from 'react';
import items from './assets/data_5';
import Menu from './components/p5/Menu';
import Categories from './components/p5/Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

export default function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};
	return (
		<main>
			<section className="menu-section">
				<div className="title">
					<h2>Our Menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

// // //--------ACCORDION 4--------//
// import React from 'react';
// import Question from './components/p4/Question';
// import data from './assets/data_4';

// export default function App() {
// 	const [questions, setQuestions] = React.useState(data);

// 	return (
// 		<main className="container">
// 			<h3>Login FAQ</h3>
// 			<section className="info">
// 				{questions.map((question) => {
// 					return <Question key={question.id} {...question} />;
// 				})}
// 			</section>
// 		</main>
// 	);
// }

// // //--------REVIEWS APP 3--------//
// import Review from './components/p3/Review';

// export default function App() {
// 	return (
// 		<main>
// 			<section className="container">
// 				<div className="title">
// 					<h2>Our Reviews</h2>
// 				</div>
// 				<Review />
// 			</section>
// 		</main>
// 	);
// }

// // //--------TOURS APP 2--------//
// import { useState, useEffect } from 'react';
// import Loading from './components/p2/Loading';
// import Tours from './components/p2/Tours';

// const url = 'https://course-api.com/react-tours-project'; //tour data

// export default function App() {
// 	const [loading, setLoading] = useState(true);
// 	const [tours, setTours] = useState([]);

// 	const removeTour = (id) => {
// 		const newTours = tours.filter((tour) => tour.id !== id);
// 		setTours(newTours);
// 	};

// 	const fetchTours = async () => {
// 		setLoading(true);
// 		try {
// 			const res = await fetch(url);
// 			const tourData = await res.json();
// 			setLoading(false);
// 			setTours(tourData);
// 		} catch (err) {
// 			setLoading(false);
// 			console.log(`Error: ${err} - Unable to fetch Tour data`);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchTours();
// 	}, []);

// 	if (loading)
// 		return (
// 			<main>
// 				<Loading />
// 			</main>
// 		);
// 	if (tours.length === 0) {
// 		return (
// 			<main>
// 				<div className="title">
// 					<h2>No Tours Available</h2>
// 					<button className="btn" onClick={() => fetchTours()}>
// 						Refresh Tour List
// 					</button>
// 				</div>
// 			</main>
// 		);
// 	}
// 	return (
// 		<main>
// 			<Tours_2 tours={tours} removeTour={removeTour} />
// 		</main>
// 	);
// }

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
