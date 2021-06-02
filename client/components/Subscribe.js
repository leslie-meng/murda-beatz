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
					<label>
						<input
							type='checkbox'
							id='murda-beatz'
							name='emails-from'
							value='murda-beatz'
							checked
						/>
						Murda Beatz
					</label>
					<label>
						<input
							type='checkbox'
							id='interscope-records'
							name='emails-from'
							value='interscope-records'
							checked
						/>
						Interscope Records
					</label>
					<label>
						<input
							type='checkbox'
							id='universal-music'
							name='emails-from'
							value='universal-music'
							checked
						/>
						Universal Music
					</label>
				</fieldset>
				<p>
					By submitting this form, you agree to the{' '}
					<a>Universal Music Group Privacy Policy</a>
				</p>
				<input type='submit' value='submit' className='button' />
			</form>
		</>
	);
};
export default Subscribe;
