import React from 'react';
export default class Socials extends React.Component {
	constructor() {
		super();
		this.state = {
			mail: false,
			spotify: false,
			apple: false,
			ig: false,
			twitter: false,
			fb: false,
		};
		this.hover = this.hover.bind(this);
	}
	hover(event) {
		this.setState({
			...this.state,
			[event.target.id]: !this.state[event.target.id],
		});
	}
	render() {
		return (
			<section id='socials'>
				<ul>
					<a href=''>
						<li>
							<img
								id='mail'
								onMouseOver={this.hover}
								onMouseOut={this.hover}
								src={`/images/socials/ico-mail${
									this.state.mail ? 'white' : ''
								}.png`}
							/>
						</li>
					</a>
					<a href=''>
						<li>
							<img
								id='spotify'
								onMouseOver={this.hover}
								onMouseOut={this.hover}
								src={`/images/socials/ico-spotify${
									this.state.spotify ? 'white' : ''
								}.png`}
							/>
						</li>
					</a>
					<a href=''>
						<li>
							<img
								id='apple'
								onMouseOver={this.hover}
								onMouseOut={this.hover}
								src={`/images/socials/ico-apple${
									this.state.apple ? 'white' : ''
								}.png`}
							/>
						</li>
					</a>
					<a href=''>
						<li>
							<img
								id='ig'
								onMouseOver={this.hover}
								onMouseOut={this.hover}
								src={`/images/socials/ico-ig${
									this.state.ig ? 'white' : ''
								}.png`}
							/>
						</li>
					</a>
					<a href=''>
						<li>
							<img
								id='twitter'
								onMouseOver={this.hover}
								onMouseOut={this.hover}
								src={`/images/socials/ico-twitter${
									this.state.twitter ? 'white' : ''
								}.png`}
								className='twitter'
							/>
						</li>
					</a>
					<a href=''>
						<li>
							<img
								id='fb'
								onMouseOver={this.hover}
								onMouseOut={this.hover}
								src={`/images/socials/ico-fb${
									this.state.fb ? 'white' : ''
								}.png`}
							/>
						</li>
					</a>
				</ul>
			</section>
		);
	}
}
