import React from 'react';
import Hero from './Hero';
import Photos from './Photos';
import Releases from './Releases';
import Tour from './Tour';
import Store from './Store';
import Subscribe from './Subscribe';
import Videos from './Videos';
import Footer from './Footer';
import Socials from './Socials';
const App = () => {
	return (
		<>
			<Hero />
			<Socials />
			<Releases />
			<Tour />
			<Videos />
			<Store />
			<Photos />
			<Subscribe />
			<Footer />
		</>
	);
};
export default App;
