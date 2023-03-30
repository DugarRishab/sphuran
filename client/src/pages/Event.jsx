import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import { useLocation } from "react-router-dom";
// for singular events
const Event = () => {
	const events = [
		{
			id: 1,
			name: "Nuts and Bolts",
			img: "",
			desc: "The robotics event will feature two exciting competitions: a line follower and a robot race. The line follower will challenge robots to follow a course without deviating from a black line, while the robot race will test the speed and agility of robots as they navigate an obstacle course.",
			rounds: "2",
		},
		{
			id: 2,
			name: "Electroquip",
			img: "",
			desc: "Electroquip, in collaboration with industry partners, organized an electrical quiz event to test the knowledge of electrical engineering students. The event included various rounds of questions covering topics such as power systems, control systems, and electrical machinery. The winners received prizes and recognition for their knowledge and skills in the field.",
			rounds: "3",
		},

		{
			id: 3,
			name: "Illumination ",
			img: "",
			desc: "Circuit simulation competition is a competition where participants create and simulate electronic circuits using software tools. The competition aims to challenge the creativity and technical skills of the participants in designing and optimizing circuits. Participants are judged based on the functionality, efficiency, and originality of their designs",
			rounds: "3",
		},
		{
			id: 4,
			name: "Cyber Blame",
			img: "",
			desc: "Coding competition is a competition where participants solve programming problems using various programming languages. The competition tests the participants' ability to write efficient and optimized code within a time limit. Participants are judged based on the correctness, speed, and elegance of their code. The competition provides a platform for coders to showcase their skills and compete with other talented programmers.",
			rounds: "1",
		},
		{
			id: 5,
			name: "Argumentation",
			img: "",
			desc: "Debate competition is an event where participants argue for or against a given topic. The competition aims to challenge the participants' public speaking, critical thinking, and persuasive skills. Participants are judged based on their ability to construct and present logical arguments, rebut their opponents' arguments, and effectively communicate their ideas. The competition provides a platform for participants to develop their communication and debating skills.",
			rounds: "2",
		},
		{
			id: 6,
			name: "Electrical Quiz ",
			img: "",
			desc: "It would be a quiz event which would be based on general electrical knowledge. Participants would be tested on their knowledge related to everything in the electrical world from history to concepts.",
			rounds: "2",
		},
		{
			id: 7,
			name: "Adhayan",
			img: "",
			desc: "It is an event where teams of students or professionals analyze and present solutions to real-life business problems. The competition requires critical thinking, creativity, and strategic planning skills. The topic would be related to any present day electrical problem.",
			rounds: "2",
		},
		{
			id: 8,
			name: "Poster Presentation",
			img: "",
			desc: "It is a platform for students to showcase their work visually. Participants create an informative and visually appealing poster that summarizes their research, findings, and conclusions. Judges assess the posters based on creativity, content, and design, and winners are recognized for their contributions. These competitions provide an opportunity to network, learn, and enhance presentation skills.",
		},
		{
			id: 9,
			name: "ElectroSearch",
			img: "",
			desc: "Electrical treasure hunt is a fun-filled event where participants solve clues and puzzles to find hidden electrical components. The event challenges participants to use their knowledge of circuits, power systems, and electrical engineering to locate the hidden treasures. It's a great way to learn while having fun and promotes teamwork and problem-solving skills. ",
			rounds: "2",
		},
	];

	const location = useLocation();

	console.log(location);

	const eventId = location.search.split("e=")[1];
	const event = events.find((event) => event.id == eventId);

	return (
		<div className="event">
			{event && (
				<>
					<div className="header">{event.name}</div>
					<div className="lower-body">
						<div className="desc">
							<div className="title">{event.name}</div>
							<div className="desc-body">
								{event.desc}
								<div className="details">
									<div>Rounds - {event.rounds}</div>
									{/* <div>Time - {event.time}</div>
									<div>Venue - {event.venue}</div> */}
								</div>
								<CustomButton
									variant={"contained"}
									text="Register Now"
								></CustomButton>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Event;
