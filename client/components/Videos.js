import React, { useState } from 'react';

const Videos = (props) => {
	// const[state, setState] = useState({featured: })
	return (
		<>
			<section id='videos'>
				<h1 className='white-title'>Videos</h1>
			</section>
			<section className='video-slider'>
				<section className='video-slide'>
					<iframe
						width='560'
						height='315'
						src={
							'https://www.youtube.com/embed/zdNFWS0xd-s?controls=0&autohide=1&rel=0'
						}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						modestbranding='1'
					></iframe>
					<section className='overlay-content'>
						<div className='play-button'>
							<img src='/images/nav/play-button.png' />
						</div>
					</section>
				</section>
				<section className='video-slide'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/pNmXEL6g6xo?controls=0'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						modestbranding='1'
					></iframe>
					<section className='overlay-content'>
						<div className='play-button'></div>
					</section>
				</section>
			</section>
			<section>
				<section id='video-caption'>
					<h2>Banana Split</h2>
					<p>{'Murda Beatz(Feat YNW Melly & Lil Durk)'}</p>
				</section>
				<section className='nav-buttons'>
					<div className='forward'></div>
					<div className='back'></div>
				</section>
				<button>View all videos</button>
			</section>
		</>
	);
};
export default Videos;
