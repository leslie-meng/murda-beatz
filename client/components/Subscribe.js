import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';

const Subscribe = (props) => {
	return (
		<section id='subscribe'>
			<h1 className='white-title'>Subscribe</h1>

			<form>
				<div id='drops'>
					<div>
						<input type='email' name='email' placeholder='EMAIL ADDRESS' />
					</div>
					<div>
						<CountryDropdown
							style={{
								color: '#f6c82a',
								backgroundColor: 'rgba(0, 0, 0, 0)',
								borderBottom: '2px solid #f6c82a',
								width: '100%',
							}}
						/>
					</div>
				</div>
				<fieldset>
					<legend>Subscribe to emails from:</legend>
					<label
						style={{ display: 'inline-block', marginLeft: '10px' }}
						htmlFor='murda-beatz'
					>
						<input
							type='checkbox'
							id='murda-beatz'
							name='emails-from'
							value='murda-beatz'
							checked
							style={{ display: 'inline-block' }}
						/>
						Murda Beatz
					</label>
					<label
						style={{ display: 'inline-block', marginLeft: '10px' }}
						htmlFor='interscope-records'
					>
						<input
							type='checkbox'
							id='interscope-records'
							name='emails-from'
							value='interscope-records'
							checked
							style={{ display: 'inline-block' }}
						/>
						Interscope Records
					</label>
					<label
						style={{ display: 'inline-block', marginLeft: '10px' }}
						htmlFor='universal-music'
					>
						<input
							type='checkbox'
							id='universal-music'
							name='emails-from'
							value='universal-music'
							checked
							style={{ display: 'inline-block' }}
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
		</section>
	);
};
export default Subscribe;
