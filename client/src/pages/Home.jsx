import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import "./style.css";

const Home = () => {
	return (
		<div className="home">
			<div className="header">
				<div className="date">07_02_2023 - 09_02_2023</div>
				<div className="title">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
				<CustomButton text="Register Now" variant="contained"></CustomButton>
				<div className="logos">
					<div className="item">
						<img src="/assets/iiest-logo-white.png" alt="" />
					</div>
					<div className="divider"></div>
					<div className="item">
						<img src="/assets/iiest-logo-white.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Home;