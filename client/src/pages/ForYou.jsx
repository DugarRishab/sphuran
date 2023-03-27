import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';

const ForYou = () => {
	return (
		<div className="foryou">
			<div className="header">For You</div>
			<div className="lower-body">
				<div className="item">
					<div className="img">
						<img src="/assets/campus.jpg" alt="" />
					</div>
					<div className="body">
						The Technical Fest of Department of Electrical
						Engineering is back after the lockdown and we want all
						the interested students to be part of it!
					</div>
					<div className="body">
						As such,We are inviting applications of Campus
						Ambassador from other college students. As the CA,you
						would be the face of SPHURAN in your Institute,promote
						it's events and Make your students known that how
						prestigious it is to participate in SPHURAN. And what's
						more ,The Best CAs would be rewarded with certificates
						and goodies from an institution of national importance.
					</div>
					<div className="body">
						Concepts Rectified,Calibre amplified !
						<a href="https://docs.google.com/forms/d/e/1FAIpQLSdNbkE06Tj-0jyRF1tn4FXunHEknBylJ-AJzqhuUwZSEX3eGQ/viewform">
							<CustomButton
								text="Apply Now"
								variant="contained"
							></CustomButton>
						</a>
					</div>
				</div>
				<div className="item">
					<div className="img">
						<img src="/assets/merchandise.jpg" alt="" />
					</div>
					<div className="body">
						Get ready to electrify your minds as The Sphuran 2023
						T-shirt is up for grabs. Flaunt this uber-cool, chic and
						stylish tee and become a part of the electrifying
						experience this April. Along with this, we have Sphuran
						bands to flaunt your participation and tuck this special
						memory up of Sphuran with you forever. And all this at
						an affordable price of 359 Rupees Only. (349 If only T
						shirt)
					</div>
					<div className="body">
						Payment Details:- Name- Ritu Raj Ranjan Mishra
						<br></br>
						UPI number- 7724919790<br></br>
						UPI ID- rituraj772491@oksbi <br></br>You may also pay
						via cash to this person by contacting him.
					</div>
					<div className="body">
						Don't miss the chance of showing off your calibre by
						acquiring this funky T-shirt and band and get ready to
						jolt your minds as you charge ahead for empowering
						innovations!
						<a href="https://forms.gle/K5X2uyZ1ZonJ9QUe6">
							<CustomButton
								text="Order Now"
								variant="contained"
							></CustomButton>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default ForYou;