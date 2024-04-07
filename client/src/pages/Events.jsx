import React, { useState } from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import { updateUserData } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { alert } from "../components/CustomAlert/alert";
// for all events

const Events = ({ user, login, logout }) => {
	const events = [
		{
			id: "2",
			name: "Electroquip",
			img: "/assets/eventposters/electroquip.jpg",
			desc: (
				<>
					🔌🔌 Get ready to unleash the power of your knowledge and
					embark on an electrifying journey at "Electroquip" - the
					ultimate quiz competition at the heart of the Electrical
					Department's technical fest! SPHURAN 3.0. Dive deep into the
					world of electricity and circuits, conquer the challenges of
					electrical machines, navigate the complexities of power
					systems, and master the intricacies of control systems? If
					so, then Electroquip is your moment to shine!
					<br />
					⚡ Brace yourself for an adrenaline-fueled battle of
					intellects, where every question sparks excitement and every
					answer propels you closer to victory. Whether you're a
					seasoned scholar or a newcomer to the field, there's
					something for everyone in this thrilling competition.
					<br />
					🏆 But wait, there's more! In addition to the thrill of the
					challenge and the glory of victory, participants of
					Electroquip stand a chance to win some incredible prizes -
					from cutting-edge gadgets to exclusive scholarships, the
					rewards are as electrifying as the competition itself!
					<br />
					💡 So, gather your team, charge up your brain cells, and
					join us at Electroquip for an unforgettable experience that
					will leave you buzzing with excitement. See you at the quiz
					where brilliance meets prizes!
				</>
			),
			rounds: "3",
			venue: <>Round 1, 2, & 3 - EE seminar hall (2nd Floor, EE Dept)</>,
			teamSize: "2 to 3",
			prizeMoney: "12,000",
			entryFee: "70/team (for non-iiestians)",
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			register: "https://forms.gle/fucjtsH44QkKJHTx7",
			coordinators: "Pulkit Kapoor: 7905892410 and Arnab Mahapatra: 9330681644",
		},
		{
			id: "3",
			name: "Illumination ",
			img: "/assets/eventposters/illumination.jpg",
			desc: (
				<p>
					💡💡 Get ready to illuminate your imagination and spark
					innovation at "Illumination" – the exhilarating circuit
					simulation competition set to electrify the stage of the
					Electrical Engineers' Society's technical fest SPHURAN 3.0!
					Are you ready to bring your circuit design skills to life in
					a virtual arena? Illumination invites you to harness the
					power of simulation software and showcase your ability to
					create, optimize, and troubleshoot circuits with precision
					and flair. Dive deep into the world of electronics as you
					navigate through a series of challenges, from basic circuits
					to advanced systems. Whether you're a seasoned engineer or a
					budding enthusiast, Illumination offers a platform for you
					to shine bright like a circuit board!
					<br />
					⚡ With each simulation, you'll be put to the test, pushing
					the boundaries of your knowledge and ingenuity. From
					analyzing complex circuit configurations to troubleshooting
					voltage drops, Illumination will electrify your senses and
					ignite your passion for electrical engineering.
					<br />
					🏆 And the best part? Participants of Illumination have the
					chance to win incredible prizes and earn recognition for
					their circuit mastery. It's not just about the competition –
					it's about celebrating innovation and pushing the boundaries
					of what's possible.
					<br />
					🚀 So, gather your tools, fire up your imagination, and get
					ready to make your mark on the world of circuit simulation
					at Illumination. This is your moment to shine and showcase
					your talent to the world! <br /> 🌟 Don't miss out on this
					electrifying opportunity to test your skills and forge new
					connections. Join us at Illumination and let your circuits
					light up the stage! See you at the competition where
					innovation meets simulation! ⚡
				</p>
			),
			rounds: "2",
			venue: "Round 1 & 2- S-464 (3rd Floor)",
			teamSize: "1 to 2",
			prizeMoney: "10,000",
			entryFee: "50/team (for non-iiestians)",
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			register: "https://forms.gle/WTM7Cu1QDz9ceShe9",
			coordinators: "Adarsh Jaiswal: 7615893526 and Ayush Sagar: ",
		},
		{
			id: "4",
			name: "Cyber Blame",
			img: "/assets/eventposters/cyberblame.jpg",
			desc: (
				<>
					💻💻 Get ready to immerse yourself in the world of coding
					and cybersecurity at "CyberBlame" – the ultimate coding
					competition at the heart of the Electrical Engineers'
					Society's technical fest SPHURAN 3.0! Are you a coding
					enthusiast with a passion for problem-solving and
					innovation? CyberBlame challenges you to showcase your
					programming prowess and cybersecurity skills in an
					adrenaline-pumping competition.
					<br />
					🔒 Prepare to tackle a series of coding challenges designed
					to test your logic, creativity, and ability to navigate
					through complex scenarios. From algorithmic puzzles to
					cybersecurity simulations, CyberBlame will push your skills
					to the limit.
					<br />
					🛡 Dive into the realm of cybersecurity as you defend virtual
					networks, thwart cyber threats, and demonstrate your ability
					to secure digital systems against vulnerabilities.
					<br />
					🏆 The stakes are high, and the rewards are even higher!
					Participants of CyberBlame have the opportunity to win
					prestigious awards, valuable prizes, and most importantly,
					earn recognition for their coding expertise.
					<br />
					💡 So, sharpen your coding skills, gear up for the
					challenge, and get ready to showcase your talent in the
					thrilling arena of CyberBlame. This is your chance to shine
					and leave a lasting impact on the world of coding and
					cybersecurity!
					<br />
					🚀 Don't miss out on this exhilarating opportunity to test
					your abilities and compete with the best. Join us at
					CyberBlame and let your code speak for itself! See you at
					the competition where innovation meets cybersecurity!
				</>
			),
			rounds: "1",
			venue: "Online",
			teamSize: "1",
			prizeMoney: "10,000",
			entryFee: "70/team (for non-iiestians)",
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			coordinators: "Iman Kalyan Majumder: 9831327139 and Nafis Adnan Mondal: 8420807274",
		},
		{
			id: "5",
			name: "Argumentation",
			img: "/assets/eventposters/argumentation.jpg",
			desc: (
				<>
					🗣🗣 Prepare to delve into thought-provoking discussions and
					showcase your persuasive prowess at "Argumentation" – the
					dynamic debate competition at the heart of the technical
					fest of Electrical Engineers' Society named SPHURAN 3.0! Are
					you passionate about presenting compelling arguments and
					defending your viewpoints with clarity and conviction?
					Argumentation provides the platform for you to articulate
					your ideas and engage in stimulating debates. Engage in
					riveting debates on a spectrum of topics relevant to
					technology, society, and innovation. Whether you thrive on
					policy discussions or philosophical dilemmas, Argumentation
					offers a stage for intellectual exploration.
					<br />
					🏆 Compete against your peers in a structured format that
					emphasizes critical thinking and effective communication.
					Demonstrate your ability to analyze issues from multiple
					angles and influence opinions through well-reasoned
					arguments.
					<br />
					📣 The stage is set, and the spotlight is on you!
					Participants of Argumentation have the opportunity to earn
					accolades and recognition for their eloquence and debate
					skills.
					<br />
					🎤 So, refine your rhetoric, hone your reasoning, and join
					us at Argumentation for an exhilarating intellectual
					challenge. This is your chance to make your voice heard and
					leave a lasting impact on the audience!
					<br />
					🚀 Don't miss this stimulating opportunity to participate in
					meaningful debates. See you at Argumentation, where ideas
					clash and minds are enriched through lively discourse! 💬
				</>
			),
			rounds: "1",
			venue: "EE Seminar Hall",
			teamSize: "2",
			prizeMoney: "8,000",
			entryFee: "70/team (for non-iiestians)",
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			register: "https://forms.gle/7gfA97uLnsXuSBSa9",
			coordinators: "Vatsal Jain: 8200138644 and Rounak Chowdhury",
		},

		{
			id: "7",
			name: "Adhayan",
			img: "/assets/eventposters/adhayan.jpg",
			desc: (
				<>
					📈📈 Brace yourself for an intellectual adventure like no
					other as "Adhyayan" takes center stage in the technical fest
					of Electrical Engineers' Society SPHURAN 3.0! Get ready to
					immerse yourself in the world of strategic analysis and
					problem-solving. Adhyayan challenges you to think
					critically, analyze meticulously, and craft innovative
					solutions to real-world scenarios.From unraveling industry
					puzzles to devising cutting-edge strategies, Adhyayan
					promises to stretch your intellect and ignite your
					creativity. It's not just a competition – it's a journey of
					exploration and discovery.
					<br />
					🏆 And the rewards? Prepare to be dazzled! Participants of
					Adhyayan stand a chance to win prestigious awards and
					coveted prizes, each one more enticing than the last. It's
					not just about recognition – it's about stepping into the
					spotlight and being celebrated for your ingenuity and
					problem-solving prowess.
					<br />
					💡 So, rally your team, sharpen your analytical skills, and
					prepare to make your mark on the world of strategic analysis
					at Adhyayan. This is your opportunity to shine bright and
					showcase your talent to the world!
					<br />
					🌟 Don't miss out on this exhilarating opportunity to
					challenge yourself and emerge victorious. Join us at
					Adhyayan and let your intellect soar to new heights! See you
					at the competition where every case study is a chance to
					redefine success! 🚀
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
			register: "https://forms.gle/GqXBPDpzHqbPBwPy8",
			coordinators: "Shreetama Majumde and Saksham Kumar: 8306913208",
		},

		{
			id: "13",
			name: "Shatranj",
			img: "/assets/eventposters/shatranj.jpg",
			desc: (
				<>
					♟♟ Prepare yourself to strategize, compete, and make your
					best moves at "Shatranj" – the thrilling chess event at the
					heart of the Electrical Engineers' Society's technical fest
					*SPHURAN 3.0! Are you a chess enthusiast with a knack for
					strategic thinking and calculated moves? Shatranj invites
					you to showcase your skills and battle it out on the
					chessboard. Engage against fellow chess aficionados in an
					exciting tournament format that will test your tactical
					prowess and decision-making abilities.
					<br />
					🧠 Dive into intense matches, plan your strategies
					carefully, and outwit your opponents to claim victory in
					this ultimate game of minds.
					<br />
					🥇 The stakes are high, and so are the rewards! Participants
					of Shatranj have the chance to win prestigious awards and
					earn recognition for their mastery of the game.
					<br />
					🏰 So, hone your tactics, anticipate your opponent's moves,
					and join us at Shatranj for an unforgettable chess
					experience. This is your moment to shine and prove your
					prowess on the chessboard!
					<br />
					🚀 Don't overlook this exciting opportunity to showcase your
					passion for chess. See you at Shatranj, where every move
					counts and victory awaits!
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			rounds: "1",
			venue: "Amenities",
			teamSize: "1",
			prizeMoney: "4,000",
			entryFee: "50/team (for non-iiestians)",
			register:
				"https://docs.google.com/forms/d/e/1FAIpQLScOsrcbJw0Tz6vz0XjmHmRDTt0abQR5Z6sa2IS3E-oryOOSaQ/viewform?usp=sf_link",
				coordinators: "Arnab Bose and B. Sudeshna: 9171644150",
		},

		{
			id: "15",
			name: "Vidyut Gyan",
			img: "/assets/eventposters/vidyutgyan.jpg",
			desc: (
				<>
					🌟🌟Get ready to power up your knowledge and dive into the
					fascinating world of electrical and electronics at "Vidyut
					Gyaan" – the ultimate quiz competition at the heart of the
					technical fest of Electrical Engineers' Society namely
					SPHURAN 3.0! Are you fascinated by circuits, intrigued by
					electronics, and curious about everything powered by
					electricity? Vidyut Gyaan is your chance to showcase your
					expertise in this dynamic field. Explore a thrilling quiz
					format that will challenge your understanding of electrical
					principles, electronic components, digital systems, and
					their real-world applications.
					<br />⚡ From transistor configurations to circuit analysis,
					Vidyut Gyaan covers a wide range of topics designed to test
					your knowledge and problem-solving skills.
					<br />
					🏆 Compete with fellow enthusiasts and electrify the stage
					with your brilliance! Participants of Vidyut Gyaan have the
					opportunity to win exciting prizes and earn well-deserved
					recognition for their electrical and electronics acumen.
					<br />
					📚 So, gear up, study those schematics, and get ready to
					unleash your Vidyut Gyaan! This is your moment to shine and
					prove that you're a true aficionado of electrical and
					electronics knowledge. <br />
					🚀 Embrace the challenge and showcase your passion at Vidyut
					Gyaan! Join us for an electrifying quiz where knowledge
					shines brightest. See you at the competition where
					brilliance takes center stage!
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2",
			rounds: "3",
			venue: (
				<>
					Round 1 - ALumni Seminar Hall <br></br> S-470 (3rd Floor)
				</>
			),
			teamSize: "1-2",
			prizeMoney: "8000",
			entryFee: "50/team (for non-iiestians)",
			register: "https://forms.gle/7WAwc733UWvhHCbU8",
			coordinators: "Soubhagya Saha: 8420003678 and Anweshdeep Ghosh:8653112407",
		},

		{
			id: "17",
			name: "Online Gaming",
			img: "/assets/eventposters/onlinegaming.jpg",
			desc: (
				<>
					🎮🎮 Get ready for an adrenaline-fueled online gaming
					extravaganza featuring FIFA and BGMI (Battlegrounds Mobile
					India) at the upcoming technical fest SPHURAN 3.0 hosted by
					the Electrical Engineers' Society! Embark on a virtual
					journey where gaming prowess meets competitive spirit.
					Whether you're a seasoned FIFA player or a battle royale
					champion in BGMI, this event promises thrilling matches and
					epic showdowns.
					<br />
					⚽ In FIFA, showcase your skills on the digital pitch,
					dribble past defenders, and score spectacular goals to claim
					victory. It's not just a game – it's a chance to become a
					virtual football legend!
					<br />
					🔫 Dive into the intense world of BGMI, where strategic
					gameplay and sharp reflexes determine survival. Drop into
					the battleground, loot, shoot, and outlast your opponents to
					emerge as the last one standing.
					<br />
					🏆 Compete against fellow gamers, challenge yourself, and
					aim for glory as you battle your way to the top of the
					leaderboard.
					<br />
					🎉 Join us for an unforgettable gaming experience, filled
					with excitement, camaraderie, and epic moments. Whether
					you're aiming for the championship title or simply here for
					the thrill, this gaming event is not to be missed!
					<br />
					🚀 Gear up, level up, and get ready to dominate the virtual
					arena at the Electrical Department's gaming event. Let's
					game on and make this event an unforgettable celebration of
					skill,strategy, and sportsmanship!
				</>
			),
			rules: "https://drive.google.com/drive/folders/1yF4Bdg4OLutiZk-ClbdwSn_Y9qAoPLV2?usp=sharing",
			rounds: "As many required",
			venue: (
				<>
					BGMI- 7th and 8th, 10:00 PM onwards, Online
					<br />
					Fifa- 8th, 9:00 PM - 10:00 PM, Amenities
				</>
			),
			teamSize: (
				<>
					Fifa-1 <br></br>
					BGMI-5+1
				</>
			),
			prizeMoney: "4,000/Game",
			entryFee: (
				<>
					Fifa-40 (For All)
					<br />
					BGMI-100/Team (For All){" "}
				</>
			),
			register: (
				<>
					BGMI - https://forms.gle/WFbkrEhW2HmbfHNt9 FIFA -
					https://docs.google.com/forms/d/e/1FAIpQLSfU4obQyhhhNYyE-KJk4lPM4ceeYDmUrW8UnSMWDbkZBqeWWA/viewform?vc=0&c=0&w=1&flr=0
				</>
			),	
			coordinators: (
				<>Fifa: Soubhagya Saha: 8420003678 and Ambhrin Roy,
				<br />
					BGMI: Rajat Rahar and DIshan Bhuin: 8918892152
				</>)
		},
	];

	const Day1Events = [
		{
			name: "Inauguration and Guest Speaker",
			time: "10am to 12:30pm",
			venue: "I-hall",
		},
		{
			name: "Electroquip (Round 1)",
			time: "1pm to 2pm",
			venue: "EE-Seminar Hall",
		},
		{
			name: "Illuminaiton (Round 1)",
			time: "3pm to 4pm",
			venue: "Room S464, 3rd Floor, EE Dept.",
		},
		{
			name: "Shatranj",
			time: "4pm to 6pm ",
			venue: "Amenities",
		},
		{
			name: "Argumentation",
			time: "6pm to 8:30pm",
			venue: "EE Seminar Hall",
		},

		{
			name: "BGMI",
			time: "10pm onwards",
			venue: "Online (From Hostel)",
		},
		
	];
	const Day2Events = [
		{
			name: "Electroquip (Round 2)",
			time: "5pm to 6pm",
			venue: "EE seminar Hall",
		},
		{
			name: "Vidyut Gyan",
			time: "6pm to 7:30pm",
			venue: "Alumni Seminar Hall",
		},
		{
			name: "Illumination (Round 2)",
			time: "7:30pm to 9pm",
			venue: "EE seminar Hall",
		},
		{
			name: "CYber Blame",
			time: "9pm to 11pm",
			venue: "Online",
		},
		{
			name: "FIFA (all rounds)",
			time: "7:30pm to 9:30pm",
			venue: "Amenities",
		},
		{
			name: "BGMI",
			time: "10pm onwards",
			venue: "Online",
		},
	];
	const Day3Events = [
		{
			name: "Adhyayan (Round 2)",
			time: "5pm to 6pm",
			venue: "EE Sub Library",
		},
		{
			name: "Electroquip (Round 3)",
			time: "10am to 11am",
			venue: "EE Seminar Hall",
		},
		{
			name: "CLosing Ceremony",
			time: "From 7:30pm",
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
		};

		registerEvent();
	};

	const [selectedTab, setSelectedTab] = useState("events");
	const handleTabClick = (tab) => {
		setSelectedTab(tab);
	};

	const [selectedDay, setSelectedDay] = useState();
	const [selectedEvents, setSelectedEvents] = useState(Day1Events);

	const handleDayClick = (day) => {
		setSelectedDay(day);
		if (day === 1) setSelectedEvents(Day1Events);
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
				<div className="extra">
					To download the event brochure,&nbsp;
					<a href="/assets/events.pdf" download>
						<div className="link">Click here</div>
					</a>
				</div>
				{selectedTab === "events" && (
					<div className="search-results">
						{events.map((event) => (
							<div className="search-card">
								<div className="image-container">
									<img
										class="image1"
										src={event.img}
										alt=""
									/>
								</div>
								<div className="card-text">
									<p className="text-head">{event.name}</p>
									<p className="text">{event.desc}</p>
									<p className="text-coordinators">{event.coordinators}</p>
								</div>
								<div className="bottom">
									<p className="link">
										<Link to={`/event?e=${event.id}`}>
											Read more
										</Link>
									</p>
									{((user && !user.events) ||
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
};

export default Events;
