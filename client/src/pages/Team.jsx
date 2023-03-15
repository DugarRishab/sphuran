import React, { useState } from 'react';

const Team = () => {
	const teams = [
		{
			id: 1,
			name: "Web Team",
			members: [
				{
					name: "Rishab",
					position: "Web Developer",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Rishab",
					position: "Web Developer",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Rishab",
					position: "Web Developer",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},
		{
			id: 2,
			name: "2nd Web Team",
			members: [
				{
					name: "Rishab",
					position: "Web Developer",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Rishab",
					position: "Web Developer",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Rishab",
					position: "Web Developer",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Rishab",
					position: "Web Developer",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},
	];
	const [selectedTeam, setSelectedTeam] = useState();
	const handleMenuClick = (team) => {
		setSelectedTeam(team);
	}
	return (
		<div className="team">
			<div className="header">OUR TEAM</div>
			<div className="lower-body">
				<div className="menu">
					{teams.map((team) => (
						<div className={`item ${
							selectedTeam && team.id === selectedTeam.id && "active"
						}`} onClick={() => handleMenuClick(team)}>{team.name}</div>
					))}
				</div>
				<div className="results">
					{selectedTeam ? (
						<>
							<div className="title">{selectedTeam.name}</div>
							<div className="members">
								{selectedTeam.members.map((mem) => (
									<div className="member">
										<div className="img">
											<img
												src="/assets/circlex300.png"
												alt=""
												className='circle'
											/>
											<img src={mem.img} alt="" className='dp'></img>
										</div>
										<div className="details">
											<div className="name">
												{mem.name}
											</div>
											<div className="position">
												{mem.position}
											</div>
										</div>
									</div>
								))}
							</div>
						</>
					) : (
						<div className="title">Please select an option</div>
					)}
				</div>
			</div>
		</div>
	);
}
 
export default Team;