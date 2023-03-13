import React from 'react';
import CustomButton from "../components/CustomButton/CustomButton"
// for all events
const Events = () => {
	return (
		<div className="events">
			<div className="header">Events</div>

			<div className="lower-body">
				{/* <div className="search-bar">
					<input type="text" />
				</div> */}
				<div className="search-results">
					<div className="search-card">
						<div className="image-container">
							<img
								class="image1"
								src="/assets/0__7RPcbo39crq3lgq 2.png"
								alt=""
							/>
						</div>
						<div className="card-text">
							<p className="text-head">lorem ipsum</p>
							<p className="text">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Et laborum quos doloremque
								porro, exercitationem facilis nobis voluptas.
								Aut laboriosam exercitationem repellendus,
								voluptatem suscipit, odio perferendis doloremque
								qui laborum tempore sunt!
							</p>
						</div>
						<div className="bottom">
							<p className="link">Read more</p>
							<CustomButton
								variant={"contained"}
								text="Register Now"
							></CustomButton>
						</div>
					</div>
					<div className="search-card"></div>
					<div className="search-card"></div>
					<div className="search-card"></div>
					<div className="search-card"></div>
					<div className="search-card"></div>
					<div className="search-card"></div>
				</div>
				<div className="tagline-2">
					<h2>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
					<h4 className="author">-lorem</h4>
				</div>
			</div>
		</div>
	);
}
 
export default Events;