import React from 'react';

const Sponsors = () => {
	const sponsors = [
		{
			id: 1,
			name: "Web Team",
			img: "/assets/circlex300.png",
		},
		{
			id: 2,
			name: "Web Team",
			img: "/assets/circlex300.png",
		},
		{
			id: 3,
			name: "Web Team",
			img: "/assets/circlex300.png",
		},
		{
			id: 4,
			name: "Web Team",
			img: "/assets/circlex300.png",
		},
		{
			id: 5,
			name: "Web Team",
			img: "/assets/circlex300.png",
		},
		{
			id: 6,
			name: "Web Team",
			img: "/assets/circlex300.png",
		},
		{
			id: 7,
			name: "Web Team",
			img: "/assets/circlex300.png",
		},
		{
			id: 8,
			name: "Web Team",
			img: "/assets/circlex300.png",
		},
	];
	return (
		<div className="sponsors">
			<div className="header">OUR SPONSORS</div>
			<div className="lower-body">
				<div className="desc">
					<div className="title">Why Sponsor us? </div>
					<div className="desc-body">
						lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
						lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
						lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
						lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum
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
			</div>
		</div>
	);
}
 
export default Sponsors;