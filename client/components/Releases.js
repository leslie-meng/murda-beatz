import React, { useEffect, useState } from 'react';
const music1 = '/images/music-section/Music1.png';
const music2 = '/images/music-section/Music2.png';
const music3 = '/images/music-section/Music3.png';
const music4 = '/images/music-section/Music4.png';
const music5 = '/images/music-section/Music5.png';

let albums = [
	{
		src: music1,
		title: 'Boss Man',
		artist: 'Rich the Kid',
		toggle: true,
	},
	{ src: music2, title: 'title', artist: 'gnf', toggle: false },
	{ src: music3, title: 'Title', artist: 'artist', toggle: false },
	{ src: music4, title: 'Funeral', artist: 'artist', toggle: false },
	{ src: music5, title: 'Banana Split', artist: 'Murda Beatz', toggle: false },
];
export default class Releases extends React.Component {
	constructor(props) {
		super();
		this.state = { albums: albums, featured: 0 };
	}

	render() {
		return (
			<section id='releases'>
				<h1 className='white-title'>Releases</h1>

				<section id='albums'>
					<section className='album-column'>
						{this.state.albums[this.state.featured].toggle ? (
							<div className='main-overlay'>
								<div>
									<p className='rollTitle'>
										{this.state.albums[this.state.featured].title}
									</p>
									<p className='rollArtist'>
										{this.state.albums[this.state.featured].artist}
									</p>
									<p className='dl'>Download/</p>
								</div>
							</div>
						) : null}
						<img
							className='main-release'
							src={this.state.albums[this.state.featured].src}
						/>
					</section>
					<section className='album-column'>
						{this.state.albums.map((each, idx) => {
							if (idx !== this.state.featured)
								return (
									<div key={idx} className='smAlbums'>
										{this.state.albums[idx].toggle ? (
											<div
												className='overlay'
												onClick={() => {
													let adjusted = this.state.albums;
													let temp = adjusted[idx];
													adjusted[idx] = adjusted[this.state.featured];
													adjusted[this.state.featured] = temp;
													this.setState({ ...this.state, albums: adjusted });
												}}
											>
												<p className='rollTitle'>
													{this.state.albums[idx].title}
												</p>
												<p className='rollArtist'>
													{this.state.albums[idx].artist}
												</p>
												<p className='dl'>Download/</p>
											</div>
										) : null}
										<img
											className='small-album'
											src={each.src}
											onClick={() => {
												let adjusted = this.state.albums;
												let temp = adjusted[idx];
												adjusted[idx] = adjusted[this.state.featured];
												adjusted[this.state.featured] = temp;
												this.setState({ ...this.state, albums: adjusted });
											}}
										></img>
									</div>
								);
						})}
					</section>
				</section>
				<button>View All Releases</button>
			</section>
		);
	}
}
