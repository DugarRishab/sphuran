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
					img: "/assets/profiles/dp.jpg",
				},
				{
					name: "Sayan Mitra",
					position: "Main Coordinator",
					img: "/assets/profiles/dp.jpg",
				},
				{
					name: "Shubham Mishra",
					position: "Assistant Main Coordinator",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Priyanshu Aggarwal",
					position: "Assistant Main Coordinator",
					img: "/assets/profiles/dp.jpg",
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
					img: "/assets/profiles/B612_20221002_231041_053 - 510619041 Rajdeep_Chakrabarty.jpg",
				},
				{
					name: "Ritu Raj Ranjan Mishra",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},
				{
					name: "Sanjay Sharma",
					position: "Associate",
					img: "/assets/profiles/IMG_20220831_010337 - 2021EEB077 SANJAY_SHARMA.jpg",
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
					img: "/assets/profiles/IMG_20221025_132239571 - 510619064 M_Avadhani.jpg",
				},
				{
					name: "Moulindu Mandal",
					position: "Head",
					img: "/assets/profiles/dp.jpg",
				},
				{
					name: "Geeta Birua",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Satarupa Mahato",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Pradip Sikder",
					position: "Associate Head",
					img: "/assets/profiles/PicsArt_02-14-01.10.35-01-01-04 - 2020EEB052 PRADIP_SIKDAR(1).jpeg",
				},/*{
					name: "Madhushree Shaw",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},*/{
					name: "Arneet Dutta",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Debankan Chatterjee ",
					position: "Associate",
					img: "/assets/profiles/20230309_133307 - 2021EEB080 DEBANKAN_CHATTERJEE.jpg",
				},{
					name: "Priyanshu Kumar",
					position: "Associate",
					img: "/assets/profiles/IMG-20230312-WA0007-01 - 2021EEB094 PRIYANSHU_KUMAR.jpeg",
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
					img: "/assets/profiles/dp.jpg",
				},
				{
					name: "Samudrala Vasanth",
					position: "Head",
					img: "/assets/profiles/dp.jpg",
				},
				{
					name: "Prayukta dey",
					position: "Head",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Abhishek Kumar",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Rinku Kanwar Shaktawat",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},/*{
					name: "Shreetama Majumdar",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},*/{
					name: "Soma Sai Sattwik",
					position: "Associate Head ",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Anurag Patel",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Dishan Bhuin",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Yashika Mittal",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Sashank Kumar",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},/*{
					name: "Sakshi Mishra",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},*/
			],
		},
		{
			id: 5,
			name: "Publicity",
			members: [
				{
					name: "Jainendra Kumar Triloki ",
					position: "Head",
					img: "/assets/profiles/1628158012274 - Copy - 510619038 Jainendra_Triloki.jpg",
				},
				{
					name: "Ayan kamar",
					position: "Head",
					img: "/assets/profiles/dp.jpg",
				},
				{
					name: "Abhinav Singh ",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},/*{
					name: "Oindrila Biswas ",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},*//*{
					name: "Prince Kumar",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},*/{
					name: "Gourab Mondal",
					position: "Associate Head ",
					img: "/assets/profiles/dp.jpg",
				},/*{
					name: "Astitva Nath Mishra",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},*//*{
					name: "Disha Mondal ",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},*/{
					name: "Prinshu Kumar",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Gourav Das ",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},
			],
		},{
			id: 6,
			name: "Content",
			members: [
				{
					name: "Swarnila Roy",
					position: "Head",
					img: "/assets/profiles/IMG_5124 - 510619039 SWARNILA_ROY.jpg",
				},
				{
					name: "Ushasi Naskar",
					position: "Head",
					img: "/assets/profiles/IMG_20230313_200244 - 510619017 Ushasi_Naskar.jpg",
				},
				{
					name: "Pratim Ghosh  ",
					position: "Head",
					img: "/assets/profiles/IMG_20230312_161352 - 510619034 PRATIM_GHOSH.jpg",
				},{
					name: "Pulkit Kapoor ",
					position: "Associate Head",
					img: "/assets/profiles/20230114_113043 - 2020EEB049 PULKIT_KAPOOR.jpg",
				},{
					name: "Bipro Bhadra ",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Sharanya Bhattacharya",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "B Sudeshna",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},/*{
					name: "Abhinay Kumar Nalapothula ",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},*/
			],
		},{
			id: 7,
			name: "Logistics",
			members: [
				{
					name: "Shubham Sarraf",
					position: "Head",
					img: "/assets/profiles/InShot_20210717_005020589 - 510619103 Shubham_sarraf.jpg",
				},/*
				{
					name: "Hansraj kumar",
					position: "Head",
					img: "/assets/profiles/dp.jpg",
				},*//*
				{
					name: "Deepa Jha",
					position: "Head",
					img: "/assets/profiles/dp.jpg",
				},*/{
					name: "Utsav Kumar Vishwakarma  ",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Anand Kumar",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Sougat Mahato",
					position: "Associate Head ",
					img: "/assets/profiles/Remini20220130214904477__01 - 2020EEB076 SOUGAT_MAHATO.jpg",
				},{
					name: "Ankit kumar ",
					position: "Associate",
					img: "/assets/profiles/IMG20230304141324 - 2020EEB083 ANKIT_KUMAR.jpg",
				},/*{
					name: "Pritam Kumar Baski ",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},*/{
					name: "Divya",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},
			],
		},{
			id: 8,
			name: "Event Management",
			members: [
				{
					name: "Mayank Kumar",
					position: "Head",
					img: "/assets/profiles/dp.jpg",
				},
				{
					name: "Arghyadeep Sarkar",
					position: "Head",
					img: "/assets/profiles/dp.jpg",
				},
				{
					name: "Rajat Rahar",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Ishita Bhaya",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},{
					name: "Dilshad Adil",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},/*{
					name: "Soubhagya Saha ",
					position: "Associate Head ",
					img: "/assets/profiles/dp.jpg",
				},*//*{
					name: "Shreyansh Trivedi ",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},*/{
					name: "Saksham Kumar",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},/*{
					name: "Aanya kumari",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},*/{
					name: "Sachin Saw",
					position: "Associate",
					img: "/assets/profiles/dp.jpg",
				},
			],
		},{
			id: 9,
			name: "Website",
			members: [
				/*{
					name: "Astha Kumari",
					position: "Head",
					img: "/assets/profiles/dp.jpg",
				},*/
				{
					name: "Subhro Sen ",
					position: "Head",
					img: "/assets/profiles/IMG_20230321_171835 - 510619113 SUBHRO_SEN.jpg",
				},
				{
					name: "Anirban Mukherjee",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},/*{
					name: "Naveen Chamaria",
					position: "Associate Head",
					img: "/assets/profiles/dp.jpg",
				},*/{
					name: "Nafis Adnan Mondal",
					position: "Associate",
					img: "/assets/profiles/nafis.jpg",
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
						<div
							className={`item ${
								selectedTeam &&
								team.id === selectedTeam.id &&
								"active"
							}`}
							onClick={() => handleMenuClick(team)}
						>
							{team.name}
						</div>
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
												className="circle"
											/>
											<div className="dp">
												<img
													src={mem.img}
													alt=""
												></img>
											</div>
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