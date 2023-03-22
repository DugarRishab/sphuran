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
import { getUserData, logoutAuth } from "../services/api";
import { alert } from "./CustomAlert/alert";

const Navbar = ({ user, login, logout }) => {

	const circle = document.querySelector(".circle");

	const handleClose = () => {
		
		const logginOut = async () => {
			try {
				await logoutAuth();
				logout();
				window.location.reload();
			} catch (err) {
				alert({ message: err.response.data.message, type: "error" });
			}
		};
		logginOut();

		// return navigate("/");

		// redirect("")
	};

	useEffect(() => {
		const refreshData = async () => {
			try {
				const res = await getUserData();
				console.log(res.data.data.user);
				if (res.data.message === "success") {
					login(res.data.data.user);
				}
			} catch (err) {
				alert({ message: err.response.data.message, type: "error" });
			}
		};
		if (user) {
			refreshData();
		}
	}, []);
	
	return (
		<div className="navbar">
			<div className="contents">
				<div className="logo">
					<div className="img">
						<img src="/assets/sphuran-logo.png" alt="" srcset="" />
					</div>
					<div>Sphuran 2.0</div>
				</div>
				<div className="nav-links">
					<NavLink to="/">
						<div className="item">Home</div>
					</NavLink>
					<NavLink to="/events">
						<div className="item">Events</div>
					</NavLink>
					<NavLink to="/team">
						<div className="item">Team</div>
					</NavLink>
					<NavLink to="/sponsor">
						<div className="item">Sponsors</div>
					</NavLink>
					
						<div className="item">Contact Us</div>
					
					<NavLink to="/register">
						<div className="item">Register</div>
					</NavLink>
					{/* <NavLink to="/schedule">
						<div className="item">Schedule</div>
					</NavLink> */}
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
