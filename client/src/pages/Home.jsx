import React, {useState} from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import "./style.css";
import {Link} from "react-router-dom"

const Home = () => {
	const [about, setAbout] = useState("sphuran")
	return (
		<div className="home">
			<div className="header">
				<div className="date">07_04_2023 to 09_04_2023</div>
				<div className="title">
					The Annual Technical Fest of the Department of Electrical
					Engineering
				</div>
				<Link to="/register">
					<CustomButton
						text="Register Now"
						variant="contained"
					></CustomButton>
				</Link>

				<div className="logos">
					<div className="item">
						<img src="/assets/EES_edited.png" alt="" />
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
								? "Sphuran, the technical festival of IIEST Shibpur's Electrical Engineering Department, brings together students, industry leaders, and researchers to showcase technical skills and innovations. Known for its intellectually stimulating events like paper presentations, project exhibitions, robotics, and hackathons, Sphuran encourages creative and critical thinking. It's a great platform for students to network, build portfolios and gain exposure to the latest trends and technologies in electrical engineering."
								: about === "iiests"
								? "Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur) is a premier technical institute located in the historic city of Howrah, West Bengal, India. With a rich legacy dating back to 1856, IIEST Shibpur offers a wide range of undergraduate and postgraduate programs in engineering, technology, and basic sciences. The institute is renowned for its world-class faculty, state-of-the-art infrastructure, and innovative research culture that nurtures the next generation of engineers, scientists, and technologists."
								: "The Electrical Engineers' Society (EES) at IIEST Shibpur is a student-run org that cultivates a community of electrical ELECTRICAL engineers. EES offers opportunities to showcase skills, collaborate on projects, and learn about advancements in electrical engineering through events, guest lectures, and workshops. EES plays a crucial role in supplementing students' education and preparing them for successful careers."}

							<p className="link">
								{about === "iiests" ? (
									<a href="https://www.iiests.ac.in">
										Check out our IIESTS website
									</a>
								) : about === "sphuran" ? (
									<Link to="/events">
										Check out our events
									</Link>
								) : (
									<a href="https://www.eesiiests.in">
										Check out our EES website
									</a>
								)}
							</p>
						</div>
					</div>
				</div>

				<div className="tagline">
					<h4 className="author">
						Experience the Spark of Innovation:
					</h4>
					<h2>A Celebration of Electrical Excellence</h2>
				</div>

				<div className="gallery-grid">
					<p>Gallery</p>

					<div class="grid-container">
						<div class="L">
							<img
								class="image1"
								src="/assets/gallery/69841845_131138014931266_2812637652514242560_n.jpg"
								alt=""
							/>
						</div>
						<div class="S1">
							<img
								class="image1"
								src="/assets/gallery/70122500_121337579244643_3821815105759215616_n.jpg"
								alt=""
							/>
						</div>
						<div class="S2">
							<img
								class="image1"
								src="/assets/gallery/70922147_131138091597925_598385121535459328_n.jpg"
								alt=""
							/>
						</div>
						<div class="S3">
							<img
								class="image1"
								src="/assets/gallery/71813259_131137258264675_209588408270454784_n.jpg"
								alt=""
							/>
						</div>
						<div class="S4">
							<img
								class="image1"
								src="/assets/gallery/71766217_131137268264674_3070247042149253120_n.jpg"
								alt=""
							/>
						</div>
						<div class="S5">
							<img
								class="image1"
								src="/assets/gallery/71213662_131137248264676_505020924886515712_n.jpg"
								alt=""
							/>
						</div>
						<div class="S6">
							<img
								class="image1"
								src="/assets/gallery/70122500_121337579244643_3821815105759215616_n.jpg"
								alt=""
							/>
						</div>
						<div class="L2">
							<img
								class="image1"
								src="/assets/gallery/70122500_121337579244643_3821815105759215616_n.jpg"
								alt=""
							/>
						</div>
						<div class="S7">
							<img
								class="image1"
								src="/assets/gallery/70122500_121337579244643_3821815105759215616_n.jpg"
								alt=""
							/>
						</div>
						<div class="S8">
							<img
								class="image1"
								src="/assets/gallery/70122500_121337579244643_3821815105759215616_n.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>

				{/* <div className="tagline-2">
					<h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
					<h4 className="author">-lorem</h4>
				</div> */}
			</div>
		</div>
	);
};

export default Home;
