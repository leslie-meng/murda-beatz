import React from 'react';

const Store = (props) => {
	return (
		<>
			<section id='store'>
				<h1 className='title'>Store</h1>
			</section>
			<section>
				<section>
					<img className='item' src='/images/store-images/Store1.png'></img>
					<section>
						<h2 className='product-name'>Banana Split Long Sleeve</h2>
						<p className='price'>$30.00</p>
					</section>
				</section>
				<section>
					<img className='item' src='/images/store-images/Store1.png'></img>
					<section>
						<h2 className='product-name'>Banana Split Long Sleeve</h2>
						<p className='price'>$30.00</p>
					</section>
				</section>
				<section>
					<img className='item' src='/images/store-images/Store1.png'></img>
					<section>
						<h2 className='product-name'>Banana Split Long Sleeve</h2>
						<p className='price'>$30.00</p>
					</section>
				</section>
			</section>
			<button className='black-button'>Shop All</button>
		</>
	);
};
export default Store;
