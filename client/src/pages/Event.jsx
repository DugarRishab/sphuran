import React, { useEffect, useState } from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUserData } from "../services/api";
import { alert } from "../components/CustomAlert/alert";
// for singular events
const Event = ({user, login, logout}) => {
	const events = [
		// {
		// 	id: 1,
		// 	name: "Nuts and Bolts",
		// 	img: "",
		// 	desc: "The robotics event will feature two exciting competitions: a line follower and a robot race. The line follower will challenge robots to follow a course without deviating from a black line, while the robot race will test the speed and agility of robots as they navigate an obstacle course.",
		// 	rounds: "2",
		// },

		//test
		{
			id: "0",
			name: "Industrial Conclave",
			img: "/assets/eventposters/2023.png",
			desc: (
				<>
					SPHURAN 2.0 is organizing an Industrial Conclave on April
					7th, 2023, from 10 AM to 12 PM at I Hall. The conclave will
					be graced by eminent speakers who are experts in their
					respective fields. The purpose of this conclave is to
					provide a platform for professionals from various industries
					to share their knowledge, expertise, and experiences with
					the students of SPHURAN 2.0. <br></br>The keynote speaker at
					the event will be Professor Gautam Bandyopadhyay, former
					Head of the Department and Professor at IIEST Shibpur. He
					will be sharing his insights and knowledge on the latest
					trends and technologies in the field of engineering and
					technology. <br></br>Another eminent speaker at the event
					will be Professor Debaprasad Kastha, who is a Senior Member
					of IEEE and a Professor at IIT Kharagpur. He will be
					speaking on the importance of innovation and research in the
					field of engineering and technology. <br></br>Srijib
					Majumdar, Head of Delivery, BFSI Products & Platform, US
					unit, Tata Consultancy Services, will also be sharing his
					experiences and insights of the industry.<br></br>{" "}
					Additionally, the conclave will also feature a presentation
					by Mr. Souradeep Mitra, an Electrical Consultant at Conveyor
					& Ropeway Technical Services Pvt. Ltd. He will speak about
					Automation in Ropeway operation.<br></br> Overall, the
					Industrial Conclave at SPHURAN 2.0 promises to be an
					informative and insightful event for the students, faculty,
					and professionals from various industries who will be
					attending. It is an excellent opportunity to gain valuable
					knowledge and insights into the latest trends and
					technologies in the field of engineering and technology.
				</>
			),
			// rounds: "3",
			venue: <>I hall</>,
		},
		{
			id: "2",
			name: "Electroquip",
			img: "/assets/eventposters/Electroquip.png",
			desc: (
				<>
					Keen on quizzing yourselves with fluxes and farads,
					transformers and taps, lightning arcs and all things core?
					Wanna show off your calibre in the electrical domain? Well
					then, you are at just the right place. Organized in
					collaboration with industry experts, 'Electroquip' is a quiz
					event like no other. Get ready to test your concepts of
					basic electrical engineering, machines, power systems and
					control systems. Those who make it to the victory stand will
					get handsome prizes and suitable recognition for their
					knowledge and skills in the field.
				</>
			),
			rounds: "3",
			venue: (
				<>
					Round 1- I hall <br></br> Round 2- EE seminar hall <br></br>{" "}
					Round 3- EE seminar hall
				</>
			),
			teamSize: "2 to 3",
			prizeMoney: "12,000",
			entryFee: "70/team (for non-iiestians)",
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
		},

		{
			id: "3",
			name: "Illumination ",
			img: "/assets/eventposters/illumination.png",
			desc: (
				<p>
					Attention all electronics enthusiasts! <br></br> Here's your
					chance to showcase your electronic skills! A series of
					challenging design problems awaits you at “Illumination”, a
					circuit simulation event. Your aim is to engineer the best
					electronic circuits that solve the problems, using any
					circuit simulation software of your choice. Credit will be
					given based on the functionality, ingenuity and efficiency
					of the design. We also have a hardware round, where you will
					be working with real components and breathing life into your
					designs. <br></br> Have fun creating new circuits and
					watching the electrons dance around!
				</p>
			),
			rounds: "2",
			venue: "Round 1 & 2- S-464 (3rd Floor)",
			teamSize: "1 to 2",
			prizeMoney: "10,000",
			entryFee: "50/team (for non-iiestians)",
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
		},
		{
			id: "4",
			name: "Cyber Blame",
			img: "/assets/eventposters/Cyberblame.png",
			desc: (
				<>
					From smartphones to self-driving cars, technology is
					changing the way we live, work, and communicate with each
					other. And at the forefront of this technological revolution
					are coders - the people who create the software that powers
					our devices and systems.<br></br> To celebrate the
					importance of coding and to encourage the development of new
					and innovative technology, we are thrilled to announce Cyber
					Blame, a coding contest for our upcoming tech fest, Sphuran
					2023. <br></br> The coding contest is the perfect
					opportunity to put your skills and knowledge of programming
					languages to the test and compete against other talented
					coders. <br></br> So, dust off your programming skills, fire
					up your laptop, and get ready to take on the challenge!
				</>
			),
			rounds: "1",
			venue: "Online",
			teamSize: "1",
			prizeMoney: "10,000",
			entryFee: "70/team (for non-iiestians)",
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
		},
		{
			id: "5",
			name: "Argumentation",
			img: "/assets/eventposters/Argumentation.png",
			desc: (
				<>
					It's going to be legen-- wait for it --dary. It's going to
					be legendary! <br></br>Equipped with facts and logic along
					with the desire to excel in heated arguments, the contenders
					are ready for the battle of words to begin in
					`Argumentation`. Powerful speeches, fiery replies and
					definitive comebacks. Team Sphuran is excited to conduct
					this debate as it is sure to rouse your oratory skills
					letting you exhibit the power of your mind in an
					electrifying debate. <br></br>So hold no vendetta as we seek
					flaming debates with red-hot words! Meet you at the
					disclosure. <br></br> Happy debating!
				</>
			),
			rounds: "1",
			venue: "EE Seminar Hall",
			teamSize: "2",
			prizeMoney: "8,000",
			entryFee: "70/team (for non-iiestians)",
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
		},
		// {
		// 	id: 6,
		// 	name: "Electrical Quiz ",
		// 	img: "",
		// 	desc: "It would be a quiz event which would be based on general electrical knowledge. Participants would be tested on their knowledge related to everything in the electrical world from history to concepts.",
		// 	rounds: "2",
		// },
		{
			id: "7",
			name: "Adhayan",
			img: "/assets/eventposters/adhayan.jpeg",
			desc: (
				<>
					Attention all tech enthusiasts! <br></br>Are you ready to
					showcase your problem-solving skills and analytical thinking
					in the tech industry? If so, we have an exciting opportunity
					for you! <br></br> Sphuran 2023 includes Adhayan, a case
					study competition that challenges participants to come up
					with innovative solutions to real-world current tech trends
					and business problems. The competition apart from boosting
					your creative thinking would provide some amazing prizes for
					the winners, including cash prizes, and certificates of
					recognition. <br></br> We can't wait to see you at the Tech
					Fest and witness the incredible solutions you come up with.
					Let's innovate, analyze, and excel together in the world of
					tech!
				</>
			),
			rounds: "2",
			venue: (
				<>
					Round 1 - Online <br></br> Round 2 - EE SEminar Hall
				</>
			),
			teamSize: "2 to 3",
			prizeMoney: "10,000",
			entryFee: "50/team (for non-iiestians)",
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
		},
		// {
		// 	id: 8,
		// 	name: "Poster Presentation",
		// 	img: "",
		// 	desc: "It is a platform for students to showcase their work visually. Participants create an informative and visually appealing poster that summarizes their research, findings, and conclusions. Judges assess the posters based on creativity, content, and design, and winners are recognized for their contributions. These competitions provide an opportunity to network, learn, and enhance presentation skills.",
		// },
		// {
		// 	id: 9,
		// 	name: "ElectroSearch",
		// 	img: "",
		// 	desc: "Electrical treasure hunt is a fun-filled event where participants solve clues and puzzles to find hidden electrical components. The event challenges participants to use their knowledge of circuits, power systems, and electrical engineering to locate the hidden treasures. It's a great way to learn while having fun and promotes teamwork and problem-solving skills. ",
		// 	rounds: "2",
		// },
		{
			id: "10",
			name: "Voltage Voyage",
			img: "/assets/eventposters/Voltage Voyage.png",
			desc: (
				<>
					Do you ever dream of being on a mind-bending adventure
					spanning several exciting landscapes in an Indiana Jones-ish
					style? Well, Sphuran 2.0 brings you another breathtaking
					event Voltage Voyage where you need to rush your brain all
					way through the basic concepts of Electrical Engineering to
					track down the hidden treasures and snatch the chance of
					squashing out the best of team work. <bg></bg> So guys,
					energise yourself and get ready to manifest something so
					educative yet so much fun !
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			rounds: "1",
			venue: "Parade Ground",
			teamSize: "3-4",
			prizeMoney: "10,000",
			entryFee: "100/team (for non-iiestians)",
		},
		{
			id: "11",
			name: "Ace the Race",
			img: "/assets/eventposters/acetherace.png",
			desc: (
				<>
					Love building new and advanced robots? Wanna test your bot
					deign skills to the limit? <br></br>“Ace the Race” is an
					exciting robot design competition. We envision that student
					teams will develop their own robotic systems in order to
					compete in Line follower races, challenging the limits of
					robotic design and autonomy technologies. This challenge
					will test the speed, accuracy and agility of your robots to
					the next level. So get ready to amp your design skills for a
					fierce robo battle!
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			rounds: "1",
			venue: "Netaji Bhawan",
			teamSize: "Any",
			prizeMoney: "10,000",
			entryFee: "100/team (for non-iiestians)",
		},
		{
			id: "12",
			name: "Tech Trends",
			img: "/assets/eventposters/techtrends.jpeg",
			desc: (
				<>
					Don't we often lose our way through tedious chapters of
					unappealing books while going for something quite simple and
					conclusive? As far as we go, that's definitely a very boring
					way to learn.<br></br>Therefore, be your own mentor to
					learning as we are yet with another unique and exciting
					event where you can showcase your hidden talent of
					presenting ideas in a visually simpler way. All you need to
					do is, bring up your research recipe, cook it up with some
					attractive content, garnish it with lots, and lots of your
					creativity with a pinch of simplicity, and there you go,
					ready to serve! <br></br>It's always nice to find your
					hidden self, isn't it? So what are you even waiting for, go
					and register now!
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			rounds: "2",
			venue: (
				<>
					Round 1 - EE sublibrary <br></br> Round 2 - EE Sublibrary
				</>
			),
			teamSize: "2 to 3",
			prizeMoney: "10,000",
			entryFee: "70/team (for non-iiestians)",
		},
		{
			id: "13",
			name: "Shatranj",
			img: "/assets/eventposters/Shatranj.png",
			desc: (
				<>
					Traxler , Scandinavian, Sicilian , Stafford or Ruy Lopez....
					<br></br>Which one do you prefer or wanna try your own
					variations this time ? <br></br> Delve in your thoughts ,put
					together your openings and defences , set up your traps and
					prepare yourself for the next Gambit cause <br></br>Sphuran
					2023 brings to you an enthusing chess competition on
					7/04/23. And don't forget ... <br></br>' Every move must
					have a purpose ! !'
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			rounds: "1",
			venue: "Amenities",
			teamSize: "1",
			prizeMoney: "4,000",
			entryFee: "50/team (for non-iiestians)",
		},
		{
			id: "14",
			name: "Fun Events",
			img: "/assets/eventposters/funevents.jpeg",
			desc: (
				<>
					Are you tired of only technical events? No worries, we heard
					you. We've got an exciting lineup of games that will put
					your skills to the test and keep you entertained throughout
					the day. <br></br>First up is the Dart Game, where you can
					show off your precision and accuracy by hitting the bullseye
					and scoring high. <br></br> Next, we have Wire the Loop.
					This exciting game involves taking a ring of wire through a
					loop without touching it. It may sound simple, but it
					requires a steady hand, careful planning, and quick
					reflexes. <br></br> And finally, get ready for the Headphone
					Game, where you'll wear noise-canceling headphones and try
					to lip-read what the coordinator is saying, competing
					against others to see who can get the most phrases right.{" "}
					<br></br> Don't miss out on this opportunity to challenge
					your technical skills and have fun at the same time!
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			rounds: "1",
			venue: "Parade Ground",
			teamSize: "1",
			prizeMoney: "Goodies for All",
			entryFee: "20/team (for all)",
		},
		{
			id: "15",
			name: "Vidyut Gyan",
			img: "/assets/eventposters/vidyutgyan.jpeg",
			desc: (
				<>
					Attention all electrical enthusiasts! It's time to put your
					knowledge to the test in our upcoming electrical quiz
					competition! <br></br> This competition is open to anyone
					with a passion for electrical engineering knowledge and a
					desire to learn more about the field. Whether you're a
					student, a professional, or just an enthusiast, this is your
					chance to showcase your knowledge and compete with other
					like-minded individuals.
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			rounds: "2",
			venue: (
				<>
					Round 1 - ALumni Seminar Hall <br></br> Round 2 - S-470 (3rd
					Floor)
				</>
			),
			teamSize: "1-2",
			prizeMoney: "8000",
			entryFee: "50/team (for non-iiestians)",
		},
		{
			id: "16",
			name: "Alumni Convention",
			img: "/assets/eventposters/Alumni Convention.png",
			desc: (
				<>
					As the fruit never falls away from a tree,one can never be
					away from their Alma mater no matter where they are in the
					World.
					<br></br> For the first time,Sphuran 2.0 is organising an
					alumni meet for all those who came ahead of us. All are
					invited to grace the occasion and bask in the glory days of
					their college life within the hallowed walls of the
					Department.
					<br></br> Further, our alumnis who are in many positions
					around the world would grace us with their wisdom. A
					Business meet would follow the alumni convention. Come all
					and listen to experiences of those who have sailed the sea
					of the professional world.
				</>
			),
			rules: "",
			rounds: "",
			venue: <>EE Seminar Hall, 9th April, 4PM - 6PM</>,
			/*teamSize: "1-2",
			prizeMoney: "8000",
			entryFee: "50/team",*/
		},
		{
			id: "17",
			name: "Online Gaming",
			img: "/assets/eventposters/onlinegaming.jpeg",
			desc: (
				<>
					Flaunt your gaming tactics and win prizes at SPHURAN 2.0’s
					exuberant online gaming events “Valorant” and “FIFA 2022” on
					7th and 8th April 2023. Swoop into the battlefields in your
					virtual form, line up to action or lurk in a cubby, set the
					spikes and dink the flankers to call an " ace " !! Or
					alternatively, become a world champion at FIFA through your
					strategic moves and legendary goals. So what are you waiting
					for! Register your team for the savage online gaming
					competitions “Valorant” and “FIFA 2019” . "Be a warrior not
					a worrier because ... the only fear here is no Wi-fi !”
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2?usp=sharing",
			rounds: "As many required",
			venue: (
				<>
					Valorant- 7/4,9:30 PM onwards,Online
					<br />
					Fifa- 8/4,7:30 PM-9:30 PM, Amenities
				</>
			),
			teamSize: (
				<>
					Fifa-1 <br></br>
					Valo-5+1
				</>
			),
			prizeMoney: "4,000/Game",
			entryFee: (
				<>
					Fifa-40 (For All)
					<br />
					Valo-100/Team (For All){" "}
				</>
			),
		},
	];

	const location = useLocation();

	console.log(location);

	const eventId = location.search.split("e=")[1];
	const event = events.find((event) => event.id == eventId);

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
			};

			registerEvent();
		};

	return (
		<div className="event">
			{event && (
				<>
					<div className="header">{event.name}</div>
					<div className="lower-body">
						<div className="desc">
							<div className="title">{event.name}</div>
							<div className="img">
								<img src={event.img} alt="" />
							</div>
							<div className="desc-body">
								{event.desc}
								<div className="details">
									<div className="link">
										<b>Rules</b> -{" "}
										<a href={event.rules}>{event.rules}</a>
									</div>
									<br></br>
									<div>
										<b>Rounds</b> - {event.rounds}
									</div>
									{/* <div>Time - {event.time}</div>
									<div>Venue - {event.venue}</div> */}
									<div>
										<b>Venue</b> - {event.venue}
									</div>
									<div>
										<b>Team Size</b> - {event.teamSize}
									</div>
									<div>
										<b>Prize Money</b> - ₹{event.prizeMoney}
									</div>
									<div>
										<b>Entry Fee</b> - ₹{event.entryFee}
									</div>
								</div>
								{
									((user && !user.events) ||
										(user &&
											user.events &&
											!user.events.includes(
												event.id.toString()
											))) && (
										<CustomButton
											onClick={() =>
												handleRegister(event.id)
											}
											variant={"contained"}
											text="Register Now"
										></CustomButton>
									)}
								{}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Event;
