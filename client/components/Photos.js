import React from 'react';
const images = [
	'/images/photo-section/photo1.png',
	'/images/photo-section/photo2.png',
	'/images/photo-section/photo3.png',
	'/images/photo-section/photo4.png',
	'/images/photo-section/photo5.png',
	'/images/photo-section/photo6.png',
	'/images/photo-section/photo7.png',
	'/images/photo-section/photo8.png',
	'/images/photo-section/photo9.png',
	'/images/photo-section/photo10.png',
];

export default class Photos extends React.Component {
	constructor(props) {
		super();
		this.state = {
			photos: images,
		};
	}
	render() {
		console.log(this.state.photos);
		return (
			<>
				<section id='photos'>
					<h1 className='white-title'>Photos</h1>
				</section>
				<section>
					{this.state.photos.map((each, idx) => (
						<img src={each} key={idx} className='photo'></img>
					))}
				</section>
				<button>View All Photos</button>
			</>
		);
	}
}
