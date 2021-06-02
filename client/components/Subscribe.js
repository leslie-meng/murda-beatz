import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';

const Subscribe = (props) => {
	return (
		<>
			<section id='subscribe'>
				<h1 className='white-title'>Subscribe</h1>
			</section>
			<form>
				<input type='email' name='email' placeholder='EMAIL ADDRESS' />
				<CountryDropdown />
				<fieldset>
					<legend>Subscribe to emails from:</legend>
					<input
						type='checkbox'
						id='murda-beatz'
						name='emails-from'
						value='murda-beatz'
					/>
					<label for='murda-beatz'>Murda Beatz</label>
					<input
						type='checkbox'
						id='interscope-records'
						name='emails-from'
						value='interscope-records'
					/>
					<label for='murda-beatz'>Interscope Records</label>
					<input
						type='checkbox'
						id='universal-music'
						name='emails-from'
						value='universal-music'
					/>
					<label for='universal-music'>Universal Music</label>
				</fieldset>
			</form>
		</>
	);
};
export default Subscribe;
