import React from 'react';

const Store = (props) => {
	return (
		<section id='store'>
			<h1 className='black-title'>Store</h1>
			<section className='store'>
				<section>
					<img className='item' src='/images/store-images/Store1.png'></img>
					<section>
						<h2 className='product-name'>Banana Split Long Sleeve</h2>
						<p className='price'>$30.00</p>
					</section>
				</section>
				<section>
					<img className='item' src='/images/store-images/Store2.png'></img>
					<section>
						<h2 className='product-name'>Banana Split Long Sleeve</h2>
						<p className='price'>$30.00</p>
					</section>
				</section>
				<section>
					<img className='item' src='/images/store-images/Store3.png'></img>
					<section>
						<h2 className='product-name'>Banana Split Long Sleeve</h2>
						<p className='price'>$30.00</p>
					</section>
				</section>
			</section>
			<button className='black-button'>Shop All</button>
		</section>
	);
};
export default Store;
