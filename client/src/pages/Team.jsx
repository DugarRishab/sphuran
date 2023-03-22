import React, { useState } from 'react';

const Team = () => {
	const teams = [
		{
			id: 1,
			name: "Coordinator",
			members: [
				{
					name: "Souvik Sengupta",
					position: "Main Coordinator",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Sayan Mitra",
					position: "Main Coordinator",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Shubham Mishra",
					position: "Assistant Main Coordinator",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Priyanshu Aggarwal",
					position: "Assistant Main Coordinator",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},
		{
			id: 2,
			name: "Finance & Audit",
			members: [
				{
					name: "Rajdeep Chakrabarty",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Ritu Raj Ranjan Mishra",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Sanjay Sharma",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},
		{
			id: 3,
			name: "Design",
			members: [
				{
					name: "Jayanth Avadhani ",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Moulindu Mandal",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Geeta Birua",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Satarupa Mahato",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Pradip Sikder",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Madhushree Shaw",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Arneet Dutta",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Debankan Chatterjee ",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Priyanshu Kumar",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},
		{
			id: 4,
			name: "Sponsorship",
			members: [
				{
					name: "Sayak Chowdhury ",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Samudrala Vasanth",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Prayukta dey",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Abhishek Kumar",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Rinku Kanwar Shaktawat",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Shreetama Majumdar",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Soma Sai Sattwik",
					position: "Associate Head ",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Anurag Patel",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Dishan Bhuin",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Yashika Mittal",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Sashank Kumar",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Sakshi Mishra",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},
		{
			id: 5,
			name: "Publicity",
			members: [
				{
					name: "Jainendra Kumar Triloki ",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Ayan kamar",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Abhinav Singh ",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Oindrila Biswas ",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Prince Kumar",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Gourab Mondal",
					position: "Associate Head ",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Astitva Nath Mishra",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Disha Mondal ",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Prinshu Kumar",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Gourav Das ",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},{
			id: 6,
			name: "Content",
			members: [
				{
					name: "Swarnila Roy",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Ushasi Naskar",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Pratim Ghosh  ",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Pulkit Kapoor ",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Bipro Bhadra ",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Sharanya Bhattacharya",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "B Sudeshna",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Abhinay Kumar Nalapothula ",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},{
			id: 7,
			name: "Logistics",
			members: [
				{
					name: "Shubham Sarraf",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Hansraj kumar",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Deepa Jha",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Utsav Kumar Vishwakarma  ",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Anand Kumar",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Sougat Mahato",
					position: "Associate Head ",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Ankit kumar ",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Pritam Kumar Baski ",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Divya",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},{
			id: 8,
			name: "Event Management",
			members: [
				{
					name: "Mayank Kumar",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Arghyadeep Sarkar",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Rajat Rahar",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Ishita Bhaya",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Dilshad Adil",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Soubhagya Saha ",
					position: "Associate Head ",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Shreyansh Trivedi ",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Saksham Kumar",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Aanya kumari",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Sachin Saw",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},
			],
		},{
			id: 9,
			name: "Website",
			members: [
				{
					name: "Astha Kumari",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Suvro Sen ",
					position: "Head",
					img: "/assets/profiles/newDP 1.jpg",
				},
				{
					name: "Anirban Mukherjee",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Naveen Chamaria",
					position: "Associate Head",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Nafis Adnan Mondal",
					position: "Associate",
					img: "/assets/profiles/newDP 1.jpg",
				},{
					name: "Rishab Dugar ",
					position: "Associate",
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