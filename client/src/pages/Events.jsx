import React, { useState } from 'react';
import CustomButton from "../components/CustomButton/CustomButton"
import { updateUserData } from '../services/api';
import { Link, useNavigate } from "react-router-dom";
import { alert } from "../components/CustomAlert/alert";
// for all events

const Events = ({ user, login, logout }) => {

	const events = [
		{
			id: 1,
			name: "Nuts and Bolts",
			img: "",
			desc: "The robotics event will feature two exciting competitions: a line follower and a robot race. The line follower will challenge robots to follow a course without deviating from a black line, while the robot race will test the speed and agility of robots as they navigate an obstacle course.",
			rounds: "2"
		},
		{
			id: 2,
			name: "Electroquip",
			img: "",
			desc: "Electroquip, in collaboration with industry partners, organized an electrical quiz event to test the knowledge of electrical engineering students. The event included various rounds of questions covering topics such as power systems, control systems, and electrical machinery. The winners received prizes and recognition for their knowledge and skills in the field.",
			rounds : "3",
		},
		
		{
			id: 3,
			name: "Illumination ",
			img: "",
			desc: "Circuit simulation competition is a competition where participants create and simulate electronic circuits using software tools. The competition aims to challenge the creativity and technical skills of the participants in designing and optimizing circuits. Participants are judged based on the functionality, efficiency, and originality of their designs",
			rounds : "3",
		},{
			id: 4,
			name: "Cyber Blame",
			img: "",
			desc: "Coding competition is a competition where participants solve programming problems using various programming languages. The competition tests the participants' ability to write efficient and optimized code within a time limit. Participants are judged based on the correctness, speed, and elegance of their code. The competition provides a platform for coders to showcase their skills and compete with other talented programmers.",
			rounds : "1",
		},
		{
			id: 5,
			name: "Argumentation",
			img: "",
			desc: "Debate competition is an event where participants argue for or against a given topic. The competition aims to challenge the participants' public speaking, critical thinking, and persuasive skills. Participants are judged based on their ability to construct and present logical arguments, rebut their opponents' arguments, and effectively communicate their ideas. The competition provides a platform for participants to develop their communication and debating skills.",
			rounds : "2",
		},
		{
			id: 6,
			name: "Electrical Quiz ",
			img: "",
			desc: "It would be a quiz event which would be based on general electrical knowledge. Participants would be tested on their knowledge related to everything in the electrical world from history to concepts.",
			rounds : "2",
		},
		{
			id: 7,
			name: "Adhayan",
			img: "",
			desc: "It is an event where teams of students or professionals analyze and present solutions to real-life business problems. The competition requires critical thinking, creativity, and strategic planning skills. The topic would be related to any present day electrical problem.",
			rounds : "2",
		},
		{
			id: 8,
			name: "Poster Presentation",
			img: "",
			desc: "It is a platform for students to showcase their work visually. Participants create an informative and visually appealing poster that summarizes their research, findings, and conclusions. Judges assess the posters based on creativity, content, and design, and winners are recognized for their contributions. These competitions provide an opportunity to network, learn, and enhance presentation skills.",
			
		},{
			id: 9,
			name: "ElectroSearch",
			img: "",
			desc: "Electrical treasure hunt is a fun-filled event where participants solve clues and puzzles to find hidden electrical components. The event challenges participants to use their knowledge of circuits, power systems, and electrical engineering to locate the hidden treasures. It's a great way to learn while having fun and promotes teamwork and problem-solving skills. ",
			rounds : "2",
		},
	];

	const Day1Events = [
		{
			name: "Inauguration",
			time: "10am to 12pm",
			venue: "I-hall"
		},
		{
			name: "Electroquip",
			time: "1pm to 1:45pm",
			venue: "I-hall"
		},
		{
			name: "Inauguration",
			time: "2pm to 3pm",
			venue: "EE Sublibrary"
		},
		{
			name: "Argumentation",
			time: "3:30pm to 5:30pm",
			venue: "EE Seminar Hall"
		},
		{
			name: "Chess",
			time: "6pm to 7:30pm",
			venue: "Amenities"
		},
		{
			name: "CyberBlame",
			time: "8pm to 9:30pm",
			venue: "Online (From Hostel)"
		},
		{
			name: "Online Games (Valorant)",
			time: "From 9:30pm",
			venue: "Online (From Hostel)"
		}
	];
	const Day2Events = [
		{
			name: "Electroquip (Round 2)",
			time: "10:30am to 11:30am",
			venue: "EE seminar Hall",
		},
		{
			name: "Vidyut Gyan (Round 1)",
			time: "12pm to 1pm",
			venue: "Alumni Seminar Hall",
		},
		{
			name: "Adhyayan (Round 2)",
			time: "3pm to 4pm",
			venue: "EE seminar Hall",
		},
		{
			name: "Voltage Voyage",
			time: "4pm to 6:30pm",
			venue: "Parade Ground",
		},
		{
			name: "Online Games (Fifa)",
			time: "7:30pm to 9:30pm",
			venue: "Amenities"
		},
	];
	const Day3Events = [
		{
			name: "Electroquip (Round 3)",
			time: "10pm to 11pm",
			venue: "EE Seminar Hall",
		},
		{
			name: "Vidyut Gyan (Round 2)",
			time: "11:30pm to 1pm",
			venue: "S-470 (3rd Floor)",
		},
		{
			name: "Illumination (Round 2)",
			time: "1:30pm to 2:30pm",
			venue: "S-464 (3rd Floor)",
		},
		{
			name: "Tech trends (Round 2)",
			time: "2:30pm to 3:30pm",
			venue: "EE Sublibrary",
		},
		{
			name: "Ace the race",
			time: "3pm to 4pm",
			venue: "Netaji Bhawan",
		},
		{
			name: "Alumni convention",
			time: "4pm to 6pm",
			venue: "EE Seminar Hall",
		},
		{
			name: "Valedictory Ceremony",
			time: "From 6pm",
			venue: "I Hall",
		},
	];
	
	const navigate = useNavigate();

	const handleRegister = (id) => {

		const registerEvent = async () => {
			

			const userCopy = { ...user };
			userCopy.events.push(id);
			try {
				const res = await updateUserData(userCopy);
				if (res.data.message === "success") {
					alert({
						message: "Successfully Registered",
						type: "success",
					});
					navigate("/events");
					
					login(res.data.data.user);
				}
			} catch (err) {
				alert({
					message: err.response.data.message,
					type: "error",
				});
			}
		}

		registerEvent();
	}

	const [selectedTab, setSelectedTab] = useState("events");
	const handleTabClick = (tab) => {
		setSelectedTab(tab);
	}

	const [selectedDay, setSelectedDay] = useState();
	const [selectedEvents, setSelectedEvents] = useState(Day1Events);

	const handleDayClick = (day) => {
		setSelectedDay(day);
		if (day === 1)
			setSelectedEvents(Day1Events);
		if (day === 2) setSelectedEvents(Day2Events);
		if (day === 3) setSelectedEvents(Day3Events);
	};

	return (
		<div className="events">
			<div className="header">Events</div>

			<div className="lower-body">
				{/* <div className="search-bar">
					<input type="text" />
				</div> */}
				<div className="tabs">
					<div
						className={`item ${
							selectedTab && "events" === selectedTab && "active"
						}`}
						onClick={() => handleTabClick("events")}
					>
						Events
					</div>
					<div
						className={`item ${
							selectedTab &&
							"schedule" === selectedTab &&
							"active"
						}`}
						onClick={() => handleTabClick("schedule")}
					>
						Schedule
					</div>
				</div>
				{selectedTab === "events" && (
					<div className="search-results">
						{events.map((event) => (
							<div className="search-card">
								<div className="image-container">
									<img
										class="image1"
										src="/assets/0__7RPcbo39crq3lgq 2.png"
										alt=""
									/>
								</div>
								<div className="card-text">
									<p className="text-head">{event.name}</p>
									<p className="text">{event.desc}</p>
								</div>
								<div className="bottom">
									<p className="link">
										<Link to={`/event?e=${event.id}`}>
											Read more
										</Link>
									</p>
									{!user.events.includes(event.id.toString()) && (
										<CustomButton
											onClick={() =>
												handleRegister(event.id)
											}
											variant={"contained"}
											text="Register Now"
										></CustomButton>
									)}
								</div>
							</div>
						))}
					</div>
				)}
				{selectedTab === "schedule" && (
					<div className="schedule">
						<div className="menu">
							<div
								className={`item ${
									selectedDay && 1 === selectedDay && "active"
								}`}
								onClick={() => handleDayClick(1)}
							>
								Day 1
							</div>
							<div
								className={`item ${
									selectedDay && 2 === selectedDay && "active"
								}`}
								onClick={() => handleDayClick(2)}
							>
								Day 2
							</div>
							<div
								className={`item ${
									selectedDay && 3 === selectedDay && "active"
								}`}
								onClick={() => handleDayClick(3)}
							>
								Day 3
							</div>
						</div>
						<div className="results">
							{selectedDay ? (
								<>
									<div className="search-results">
										{selectedEvents.map((event) => (
											<div className="search-card">
												<div className="card-text">
													<p className="text-head">
														{event.name}
													</p>

													<div className="details">
														<div>
															Time - {event.time}
														</div>
														<div>
															Venue -{" "}
															{event.venue}
														</div>
													</div>
												</div>
												{/* <div className="bottom">
													<p className="link">
														Read more
													</p>
													<CustomButton
														variant={"contained"}
														text="Register Now"
													></CustomButton>
												</div> */}
											</div>
										))}
									</div>
								</>
							) : (
								<div className="title">
									Please select an option
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
 
export default Events;