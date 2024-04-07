import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';

const Sponsors = () => {
	const sponsors = [
		{
			id: 1,

			img: "/assets/sponsors/present/adarsha.jpg",
		},
		{
			id: 1,

			img: "/assets/sponsors/present/banerjee.jpg",
		},
		{
			id: 1,

			img: "/assets/sponsors/present/electromec.jpg",
		},
		{
			id: 1,

			img: "/assets/sponsors/present/jaybeeco.jpg",
		},
		{
			id: 1,

			img: "/assets/sponsors/present/zetwerk.jpg",
		},
	];
	const pastSponsors = [
		{
			id: 1,

			img: "/assets/sponsors/past/download (1).png",
		},
		{
			id: 2,

			img: "/assets/sponsors/past/crspl-logo.jpg",
		},
		{
			id: 3,

			img: "/assets/sponsors/past/download (3).png",
		},
		{
			id: 4,

			img: "/assets/sponsors/past/download.png",
		},
		{
			id: 5,

			img: "/assets/sponsors/past/download.jpg",
		},
		{
			id: 6,
			name: "Web Team",
			img: "/assets/sponsors/past/Screenshot_20230330-011503_OneDrive.jpg",
		},
		{
			id: 7,
			name: "Web Team",
			img: "/assets/sponsors/past/Screenshot_20230330-011534_OneDrive.jpg",
		},
		{
			id: 8,
			name: "Web Team",
			img: "/assets/sponsors/past/WhatsApp Image 2023-04-05 at 09.07.15.jpg",
		},
		{
			id: 9,
			name: "Web Team",
			img: "/assets/sponsors/past/madeeasy.jpg",
		},
		{
			id: 10,
			name: "Web Team",
			img: "/assets/sponsors/past/download.png",
		},
		{
			id: 11,
			name: "Web Team",
			img: "/assets/sponsors/past/madeeasy.jpg",
		},
		{
			id: 12,
			name: "Web Team",
			img: "/assets/sponsors/past/wowmomo.jpg",
		},
	];
	const partners = [
		
		{
			id: 1,
			name: "Web Team",
			img: "/assets/sponsors/partners/lightstudio-logo-white-transparent 500x125.png",
		},
		{
			id: 3,
			name: "Web Team",
			img: "/assets/sponsors/partners/download (4).png",
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