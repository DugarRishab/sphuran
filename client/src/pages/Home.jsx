import React from 'react';
import "./style.css";

const Home = () => {
	return ( 
		<div class="home">
			<h1></h1>
			<div>

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

				<div className="gallery-grid">
					<p>Gallery</p>

							<section class="layout">
								<div class="L">1</div>
								<div class="S1">2</div>
								<div class="S2">3</div>
								<div class="S3">4</div>
								<div class="S4">5</div>
								<div class="S5">6</div>
								<div class="S6">7</div>
								<div class="L2">8</div>
								<div class="S7">9</div>
							</section>
					
					<div class="grid-container">
						<div class="grid-item">
						<img
							class="grid-item-1"
							src="/assets/0__7RPcbo39crq3lgq 2.png"
							alt=""
					/>	
						</div>
						<div class="grid-item">
						<img
							class="grid-item-2"
							src="/assets/0__7RPcbo39crq3lgq 2.png"
							alt=""
					/>
						</div>
						<div class="grid-item">
						<img
							class="grid-item-3"
							src="/assets/0__7RPcbo39crq3lgq 2.png"
							alt=""
					/>
						</div>
						<div class="grid-item">
						<img
							class="grid-item-4"
							src="/assets/0__7RPcbo39crq3lgq 2.png"
							alt=""
					/>
						</div>
						<div class="grid-item">
						<img
							class="grid-item-5"
							src="/assets/0__7RPcbo39crq3lgq 2.png"
							alt=""
					/>
						</div>
						<div class="grid-item">
							<img
							class="grid-item-6"
							src="/assets/0__7RPcbo39crq3lgq 2.png"
							alt=""
					/>
						</div>
						
					</div>

				</div>

			</div>

		</div>
		
	 );
}
 
export default Home;

