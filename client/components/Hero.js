import React from 'react';

const Hero = (props) => {
	return (
		<>
			<header id=''>
				<a href='#'>
					<img id='logo' src='images/murdabeatzlogo.png' alt='Murda Beatz' />
				</a>
				<nav>
					<a href='#releases'>Releases</a>
					<a href='#videos'>Videos</a>
					<a href='#store'>Store</a>
					<a href='#photos'>Photos</a>
					<a href='#subscribe'>Subscribe</a>
				</nav>
			</header>
			<main>
				<section className='carousel'>
					<section className='containers'>
						<section className='heroInfo'>
							<p className='heroExtra test'>Check out on splice</p>

							<p className='heroFont'>Murda Beats Quarantine Sample Pack</p>

							<button className='black-button' href='#releases'>
								Listen Now
							</button>
						</section>
						<section className='heroImg'>
							<img
								alt='Murda Beats Drum Kit Quarantine Pack'
								src='images/heroimg.png'
							/>
						</section>
					</section>

					<a className='back-button'>&#10094;</a>
					<a className='forward-button'>&#10095;</a>
				</section>
			</main>
		</>
	);
};
export default Hero;
