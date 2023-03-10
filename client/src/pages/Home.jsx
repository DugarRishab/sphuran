import React, {useState} from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import "./style.css";

const Home = () => {
	const [about, setAbout] = useState("sphuran")
	return (
		<div className="home">
			<div className="header">
				<div className="date">07_02_2023 - 09_02_2023</div>
				<div className="title">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
				<CustomButton
					text="Register Now"
					variant="contained"
				></CustomButton>
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
			<div className="lower-body">
				<div className="aboutus">
					<p className="title">ABOUT US</p>
					<div className="aboutusbody">
						<div className="leftc">
							<p
								className={`item ${
									about === "sphuran" ? "active" : null
								}`}
								onClick={() => setAbout("sphuran")}
							>
								ABOUT SPHURAN
							</p>
							<p
								className={`item ${
									about === "ees" ? "active" : null
								}`}
								onClick={() => setAbout("ees")}
							>
								ABOUT EES
							</p>
							<p
								className={`item ${
									about === "iiests" ? "active" : null
								}`}
								onClick={() => setAbout("iiests")}
							>
								ABOUT IIESTS
							</p>
						</div>
						<div className="rightc">
							{about === "sphuran"
								? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe, itaque nihil maiores nobis sequi, id ducimus odio molestiae ea in at fuga similique, tenetur impedit corporis mollitia nam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe, itaque nihil maiores nobis sequi, id ducimus odio molestiae ea in at fuga similique, tenetur impedit corporis mollitia nam ipsam!"
								: about === "iiests"
								? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe, itaque nihil maiores nobis sequi, id ducimus odio molestiae ea in at fuga similique, tenetur impedit corporis mollitia nam ipsam!"
								: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe, itaque nihil maiores nobis sequi, id ducimus odio molestiae ea in at fuga similique, tenetur impedit corporis mollitia nam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe, itaque nihil maiores nobis sequi, id ducimus odio molestiae ea in at fuga similique, tenetur impedit corporis mollitia nam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe, itaque nihil maiores nobis sequi, id ducimus odio molestiae ea in at fuga similique, tenetur impedit corporis mollitia nam ipsam!"}

							<p className="link">{ about === "iiests" ? "Check our IIESTS website" : about === "sphuran" ? "Check out our events" : "Check out EES website"}</p>
						</div>
					</div>
				</div>

				<div className="tagline">
					<h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
					<h4 className="author">-lorem</h4>
				</div>

				<div className="divimage1">
					<div className="img">
						<img
							class="image1"
							src="/assets/0__7RPcbo39crq3lgq 2.png"
							alt=""
						/>
					</div>

					<div className="img-tag">lorem ipsum</div>
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
};

export default Home;

/* 
	<h2>Gallery </h1>
	<div className = "gallery"> 
		
	</div>

*/