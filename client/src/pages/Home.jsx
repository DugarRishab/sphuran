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
    <div className = 'lowerbody'>

				<div className='aboutus'>
					<h2>ABOUT US</h2>
						<div className='aboutusbody'>
								<div className = 'leftc'>
									
									<p className='item active'>ABOUT SPHURAN</p>
									<p className='item'>ABOUT EES</p>
									<p className='item'>ABOUT IIESTS</p>
									
								</div>
								<div className = 'rightc'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
								</div>
						</div>
				</div>

				<div className = "tagline">
					<h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
					<h4 className = "author">-lorem</h4>
				</div>

				<div className='divimage1'>
					<div className="img">
						<img
							class="image1"
							src="/assets/0__7RPcbo39crq3lgq 2.png"
							alt=""
					/>
					</div>
					
					<div className="img-tag">
						lorem ipsum
					</div>
					
				</div>

			</div>
		</div>
	);

}
 
export default Home;

/* 
	<h2>Gallery </h1>
	<div className = "gallery"> 
		
	</div>

*/