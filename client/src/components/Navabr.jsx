import React, { useEffect } from "react";
import {
	AppBar,
	Container,
	Toolbar,
	Box,
	Stack,
	Button,
	Typography,
	Avatar,
} from "@mui/material";
import { NavLink, useLocation, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {

	const circle = document.querySelector(".circle");
	const handleNavClick = (a) => {
		
		// circle.classList.remove(a);
		// circle.classList.add(a);
		// circle.classList.forEach((item) => {
		// 	if (item !== "circle" && item !== a) {
		// 		circle.classList.remove(item);
		// 	}
		// });

		// switch (a) {
		// 	case "home": {
		// 		circle.style.left = "50%";
		// 		circle.style.width = "1600px";
		// 		circle.style.top = "-100px";
				
		// 		break;
		// 	}
		// 	case "events": {
		// 		circle.style.left = "20%";
		// 		circle.style.width = "800px";
		// 		circle.style.top = "-100px";
		// 		// circle.style.height = "100vh";
		// 		break;
		// 	}
		// 	default: {
		// 	}
		// }
		
	}
	return (
		<div className="navbar">
			<div className="contents">
				<div className="logo">Sphuran 2.0</div>
				<div className="nav-links">
					<NavLink to="/" onClick={() => handleNavClick("home")}>
						<div className="item">Home</div>
					</NavLink>
					<NavLink
						to="/events"
						onClick={() => handleNavClick("events")}
					>
						<div className="item">Events</div>
					</NavLink>
					<NavLink to="/team" onClick={() => handleNavClick("team")}>
						<div className="item">Team</div>
					</NavLink>
					<NavLink
						to="/sponsor"
						onClick={() => handleNavClick("sponsor")}
					>
						<div className="item">Sponsors</div>
					</NavLink>
					<NavLink to="/contact">
						<div className="item">Contact Us</div>
					</NavLink>
					<NavLink to="/register">
						<div className="item">Register</div>
					</NavLink>
					<NavLink
						to="/schedule"
						onClick={() => handleNavClick("schedule")}
					>
						<div className="item">Schedule</div>
					</NavLink>
					{user ? (
						<div className="item">
							<Avatar alt={user.name} src={user.image}></Avatar>
							{user.name}
						</div>
					) : (
						<NavLink to="/auth">
							<div className="button">
								<div className="item">Login</div>
							</div>
						</NavLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
