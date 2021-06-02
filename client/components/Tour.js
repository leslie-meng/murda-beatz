import React from 'react';
//Can be set up to take all available dates from a spreadsheet or api. hard-coded for demo purposes.
const tourDates = [
	{
		date: 'Jun 6',
		venue: 'Jewel Nightclub',
		city: 'Las Vegas, NV',
	},
];
const Tour = (props) => {
	return (
		<section id='tour'>
			<h1 className='white-title'>Tour</h1>

			<section id='calendar'>
				<section className='itin'>
					<section className='itin-details'>
						<p className='date'>Jun 6</p>
						<p className='venue'>Jewel Nightclub</p>
						<p className='city'>Las Vegas, NV</p>
					</section>
					<section className='tour-actions'>
						<ul>
							<a href=''>
								<li>Tickets</li>
							</a>
							<a href=''>
								<li>VIP</li>
							</a>
							<a href=''>
								<li>RSVP</li>
							</a>
						</ul>
					</section>
				</section>

				<section className='itin'>
					<section className='itin-details'>
						<p className='date'>Jun 6</p>
						<p className='venue'>Jewel Nightclub</p>
						<p className='city'>Las Vegas, NV</p>
					</section>
					<section className='tour-actions'>
						<ul>
							<a href=''>
								<li>Tickets</li>
							</a>
							<a href=''>
								<li>VIP</li>
							</a>
							<a href=''>
								<li>RSVP</li>
							</a>
						</ul>
					</section>
				</section>

				<section className='itin'>
					<section className='itin-details'>
						<p className='date'>Jun 6</p>
						<p className='venue'>Jewel Nightclub</p>
						<p className='city'>Las Vegas, NV</p>
					</section>
					<section className='tour-actions'>
						<ul>
							<a href=''>
								<li>Tickets</li>
							</a>
							<a href=''>
								<li>VIP</li>
							</a>
							<a href=''>
								<li>RSVP</li>
							</a>
						</ul>
					</section>
				</section>

				<section className='itin'>
					<section className='itin-details'>
						<p className='date'>Aug 7</p>
						<p className='venue'>Jewel Nightclub</p>
						<p className='city'>Las Vegas, NV</p>
					</section>
					<section className='tour-actions'>
						<ul>
							<a href=''>
								<li>Tickets</li>
							</a>
							<a href=''>
								<li>VIP</li>
							</a>
							<a href=''>
								<li>RSVP</li>
							</a>
						</ul>
					</section>
				</section>

				<section className='itin'>
					<section className='itin-details'>
						<p className='date'>Jun 6</p>
						<p className='venue'>Jewel Nightclub</p>
						<p className='city'>Las Vegas, NV</p>
					</section>
					<section className='tour-actions'>
						<ul>
							<a href=''>
								<li>Tickets</li>
							</a>
							<a href=''>
								<li>VIP</li>
							</a>
							<a href=''>
								<li>RSVP</li>
							</a>
						</ul>
					</section>
				</section>

				<section className='itin'>
					<section className='itin-details'>
						<p className='date'>Jul 21</p>
						<p className='venue'>Jewel Nightclub</p>
						<p className='city'>Las Vegas, NV</p>
					</section>
					<section className='tour-actions'>
						<ul>
							<a href=''>
								<li>Tickets</li>
							</a>
							<a href=''>
								<li>VIP</li>
							</a>
							<a href=''>
								<li>RSVP</li>
							</a>
						</ul>
					</section>
				</section>
			</section>
			<button>View All Dates</button>
		</section>
	);
};
export default Tour;
