import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';

const Sponsors = () => {
	const sponsors = [
		{
			id: 1,
			name: "Web Team",
			img: "/assets/sponsors/present/download (1).png",
		},
		{
			id: 2,
			name: "Web Team",
			img: "/assets/sponsors/present/crspl-logo.jpg",
		},
		{
			id: 3,
			name: "Web Team",
			img: "/assets/sponsors/present/download (3).png",
		},
		{
			id: 4,
			name: "Web Team",
			img: "/assets/sponsors/present/download.png",
		},
		{
			id: 5,
			name: "Web Team",
			img: "/assets/sponsors/present/download.jpg",
		},
		{
			id: 6,
			name: "Web Team",
			img: "/assets/sponsors/present/Screenshot_20230330-011503_OneDrive.jpg",
		},
		{
			id: 7,
			name: "Web Team",
			img: "/assets/sponsors/present/Screenshot_20230330-011534_OneDrive.jpg",
		},
		{
			id: 8,
			name: "Web Team",
			img: "/assets/sponsors/present/WhatsApp Image 2023-04-05 at 09.07.15.jpg",
		},
		{
			id: 9,
			name: "Web Team",
			img: "/assets/sponsors/present/madeeasy.jpg",
		},
	];
	const pastSponsors = [
		{
			id: 1,
			name: "Web Team",
			img: "/assets/sponsors/past/download.png",
		},
		{
			id: 2,
			name: "Web Team",
			img: "/assets/sponsors/past/madeeasy.jpg",
		},
		{
			id: 3,
			name: "Web Team",
			img: "/assets/sponsors/past/wowmomo.jpg",
		},
	];
	const partners = [
		{
			id: 1,
			name: "Web Team",
			img: "/assets/sponsors/partners/Circuit club coloured.png",
		},
		{
			id: 1,
			name: "Web Team",
			img: "/assets/sponsors/partners/lightstudio-logo-white-transparent 500x125.png",
		},
		{
			id: 1,
			name: "Web Team",
			img: "/assets/sponsors/partners/The Telegraph Online Edugraph Logo White Background.png",
		},
		{
			id: 2,
			name: "Web Team",
			img: "/assets/sponsors/partners/download (1).jpg",
		},
		{
			id: 3,
			name: "Web Team",
			img: "/assets/sponsors/partners/download (4).png",
		},
		{
			id: 4,
			name: "Web Team",
			img: "/assets/sponsors/partners/download (5).png",
		},
		{
			id: 5,
			name: "Web Team",
			img: "/assets/sponsors/partners/UNSTOP.png",
		},
		{
			id: 6,
			name: "Web Team",
			img: "/assets/sponsors/partners/download (6).png",
		},
	];

	return (
		<div className="sponsors">
			<div className="header">OUR SPONSORS</div>
			<div className="lower-body">
				<div className="desc">
					<div className="title">Why Sponsor us? </div>
					<div className="desc-body">
						<p>
							Sphuran is the platform where the future's brightest
							engineers showcase their innovative ideas and
							cutting-edge technology. With a dynamic audience of
							electrical engineering students, this event is the
							perfect opportunity for your brand to make a lasting
							impact on the next generation of tech leaders.{" "}
						</p>
						<p>
							By sponsoring Sphuran, you'll have the chance to
							showcase your brand and demonstrate your support for
							the next wave of tech innovation. Plus, you'll get
							exposure to a highly engaged and tech-savvy
							audience, making a positive impact on your brand's
							reputation.
						</p>
						<div className="link">
							<a href="https://drive.google.com/file/d/1TGNRZMx1LChwYmiUtZPnlVl-79iI91-6/view?usp=drivesdk">
								Check out our brochure
							</a>
						</div>
					</div>
				</div>

				<div className="present">
					<div className="title">Present Sponsors</div>
					<div className="items">
						{sponsors.map((sponsor) => (
							<div className="sponsor">
								<div className="img">
									<img
										src={sponsor.img}
										alt=""
										className="dp"
									></img>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="partners present">
					<div className="title">Partners</div>
					<div className="items">
						{partners.map((partner) => (
							<div className="sponsor">
								<div className="img">
									<img
										src={partner.img}
										alt=""
										className="dp"
									></img>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="past">
					<div className="title">Past Sponsors</div>
					<div className="items">
						{pastSponsors.map((sponsor) => (
							<div className="sponsor">
								<div className="img">
									<img
										src={sponsor.img}
										alt=""
										className="dp"
									></img>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Sponsors;