import React, { useEffect, useState } from 'react';
const music1 = '/images/music-section/Music1.png';
const music2 = '/images/music-section/Music2.png';
const music3 = '/images/music-section/Music3.png';
const music4 = '/images/music-section/Music4.png';
const music5 = '/images/music-section/Music5.png';

let albums = [music1, music2, music3, music4, music5];
export default class Releases extends React.Component {
	constructor(props) {
		super();
		this.state = { albums: albums, featured: 0 };
	}

	render() {
		return (
			<>
				<section id='releases'>
					<h1 className='white-title'>Releases</h1>
				</section>
				<section>
					<section>
						<img
							className='main-release'
							src={this.state.albums[this.state.featured]}
						/>
					</section>
					<section>
						{this.state.albums.map((each, idx) => {
							if (idx !== this.state.featured)
								return (
									<img
										key={idx}
										className='small-album'
										src={each}
										onClick={() => {
											let adjusted = this.state.albums;
											let temp = adjusted[idx];
											adjusted[idx] = adjusted[this.state.featured];
											adjusted[this.state.featured] = temp;
											this.setState({ ...this.state, albums: adjusted });
										}}
									></img>
								);
						})}
					</section>
				</section>
				<button>View All Releases</button>
			</>
		);
	}
}
