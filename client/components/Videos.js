import React, { useState } from 'react';
const playlist = [
	{
		src:
			'https://www.youtube.com/embed/zdNFWS0xd-s?controls=0&autohide=1&rel=0',
		title: 'Banana Split',
		artist: 'Murda Beatz(Feat YNW Melly & Lil Durk',
	},
	{
		src: 'https://www.youtube.com/embed/pNmXEL6g6xo?controls=0',
		title: 'Banana Split',
		artist: 'Murda Beatz(Feat YNW Melly & Lil Durk',
	},
	{
		src: 'https://www.youtube.com/embed/YS8fUmyu320?controls=0',
		title: 'Shopping Spree',
		artist: 'Murda Beatz(Feat Lil Pump & Sheck Wes)',
	},
];
const Videos = (props) => {
	const [state, setState] = useState({
		featured: 0,
		play: false,
		list: playlist,
	});
	return (
		<section id='videos'>
			<h1 className='white-title'>Videos</h1>
			<section className='video-slider'>
				<section
					className='video-slide'
					onClick={() => setState((prev) => ({ ...prev, play: !prev.play }))}
				>
					<iframe
						className='youtube-big'
						src={state.list[state.featured].src}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						modestbranding='1'
						onPause={() => setState((prev) => ({ ...prev, play: !prev.play }))}
					/>
					{!state.play ? (
						<section className='overlay-content'>
							<div className='play-button'>
								<img src='/images/nav/play-button.png' />
							</div>
						</section>
					) : null}
				</section>
				<section className='video-slide'>
					<iframe
						className='youtube-big'
						src={
							state.list[
								state.featured === state.list.length - 1
									? 0
									: state.featured + 1
							].src
						}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						modestbranding='1'
						onClick={() => setState((prev) => ({ ...prev, play: !prev.play }))}
					/>
				</section>
			</section>
			<section id='under-video'>
				<section id='video-caption'>
					<h2 className='video-title'>{state.list[state.featured].title}</h2>
					<p className='vid-artist'>{state.list[state.featured].artist}</p>
				</section>
				<section className='nav-buttons'>
					<div
						className='back'
						onClick={() =>
							setState((prev) => {
								return prev.featured !== 0
									? { ...prev, featured: prev.featured - 1 }
									: {
											...prev,
											featured: prev.list.length - 1,
									  };
							})
						}
					>
						<img src='/images/nav/back-yellow.png'></img>
					</div>
					<div
						className='forward'
						onClick={() =>
							setState((prev) => {
								return prev.featured !== prev.list.length - 1
									? { ...prev, featured: prev.featured + 1 }
									: {
											...prev,
											featured: 0,
									  };
							})
						}
					>
						<img src='/images/nav/forward-yellow.png'></img>
					</div>
				</section>
				<button>View all videos</button>
			</section>
		</section>
	);
};
export default Videos;
