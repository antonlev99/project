import React from 'react';
import './Boxes.css';
import bear from './bear.jpg';
import arthur from './arthur.jpg';
import berlin from './berlin.jpg';
import cooper from './cooper.jpg';
import eevee from './eevee.jpg';
import felix from './felix.jpg';
import honey from './honey.jpg';
import kibu from './kibu.jpg';
import mac from './mac.jpg';
import mink from './mink.jpg';
import peanut from './peanut.jpg';
import potts from './potts.jpg';
import ruby from './ruby.jpg';
import sally from './sally.jpg';
import sly from './sly.jpg';
import tuesday from './tuesday.jpg';

const Boxes = ({ name }) => {
	return (
		<div className='background'>
			<div className='pick white f3'>
			{`${name}, pick your favorite pet and click on the link to fill out an application`}
			</div>
			<br/><br/>
			<div>
				<a href="https://docs.google.com/forms/d/e/1FAIpQLSd2DNzALTcjjFEjnEkR--_07R0p7c8d6K9JS4X1A6y85pCnzg/viewform?usp=sf_link" className="myButton" target="_blank" rel="noopener noreferrer">APPLICATION</a>
			</div>
			<br/><br/>
			<li className='firr'>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={tuesday} />
					<div>
						  <h2 className='name'>Tuesday</h2>
						  <p className='gender'>Female</p>
						  <p className='price'>$150</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={bear} />
					<div>
						  <h2 className='name'>Bear</h2>
						  <p className='gender'>Male</p>
						  <p className='price'>$300</p>					
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={arthur} />
					<div>
						  <h2 className='name'>Arthur</h2>
						  <p className='gender'>Male</p>
						  <p className='price'>$450</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={berlin} />
					<div>
						  <h2 className='name'>Berlin</h2>
						  <p className='gender'>Female</p>
						  <p className='price'>$750</p>
					</div>
				</ul>
			</li>
			<br/>
			<li className='sr'>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={cooper} />
					<div>
						  <h2 className='name'>Cooper</h2>
						  <p className='gender'>Male</p>
						  <p className='price'>$600</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={eevee} />
					<div>
						  <h2 className='name'>Eevee</h2>
						  <p className='gender'>Female</p>
						  <p className='price'>$400</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={felix} />
					<div>
						  <h2 className='name'>Felix</h2>
						  <p className='gender'>Male</p>
						  <p className='price'>$150</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={honey} />
					<div>
						  <h2 className='name'>Honey</h2>
						  <p className='gender'>Female</p>
						  <p className='price'>$1150</p>
					</div>
				</ul>
			</li>
			<br/>
			<li className='tr'>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={kibu} />
					<div>
						  <h2 className='name'>Kibu</h2>
						  <p className='gender'>Male</p>
						  <p className='price'>$600</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={mac} />
					<div>
						  <h2 className='name'>Mac</h2>
						  <p className='gender'>Female</p>
						  <p className='price'>$800</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={mink} />
					<div>
						  <h2 className='name'>Mink</h2>
						  <p className='gender'>Female</p>
						  <p className='price'>$3450</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={peanut} />
					<div>
						  <h2 className='name'>Peanut</h2>
						  <p className='gender'>Male</p>
						  <p className='price'>$2000</p>
					</div>
				</ul>
			</li>
			<br/>
			<li className='ftr'>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={potts} />
					<div>
						  <h2 className='name'>Potts</h2>
						  <p className='gender'>Male</p>
						  <p className='price'>$6500</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={ruby} />
					<div>
						  <h2 className='name'>Ruby</h2>
						  <p className='gender'>Male</p>
						  <p className='price'>$600</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={sally} />
					<div>
						  <h2 className='name'>Sally</h2>
						  <p className='gender'>Female</p>
						  <p className='price'>$150</p>
					</div>
				</ul>
				<ul className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow5'>
					<img className='image' alt='golden' src={sly} />
					<div>
						  <h2 className='name'>Sly</h2>
						  <p className='gender'>Male</p>
						  <p className='price'>$750</p>
					</div>
				</ul>
			</li>
		</div>
	);
}

export default Boxes;