import React, { useEffect, useState } from "react";
import {
	AppBar,
	Container,
	Toolbar,
	Box,
	Stack,
	Button,
	Typography,
	Avatar,
	IconButton,
	Divider,
	Drawer
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

	const { innerWidth: width, innerHeight: height } = window;
	console.log(width, height);

	const [drawerOpen, setDrawerOpen] = useState(false);
	const handleDrawerOpen = () => {
		setDrawerOpen(true);
	};

	const handleDrawerClose = () => {
		setDrawerOpen(false);
	};

	const handleLinkClick = () => {
		// setMenuOpen(false);
		handleDrawerClose();
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
		<>
			<div className="navbar">
				<div className="contents">
					{width <= 720 && (
						<IconButton
							id="drawer-btn"
							onClick={handleDrawerOpen}
							sx={{
								color: "white",
							}}
						>
							<span class="material-icons">menu</span>
						</IconButton>
					)}
					<div className="logo">
						<div className="img">
							<img
								src="/assets/sphuran-logo.png"
								alt=""
								srcset=""
							/>
						</div>
						<div>Sphuran 2.0</div>
					</div>
					{width > 720 && (
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
							<NavLink to="/contact">
								<div className="item">Contact Us</div>
							</NavLink>

							<NavLink to="/register">
								<div className="item">Register</div>
							</NavLink>
							{/* <NavLink to="/schedule">
        <div className="item">Schedule</div>
    </NavLink> */}
							{user ? (
								<div className="item">
									<Avatar
										alt={user.name}
										src={user.image}
									></Avatar>
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
					)}
					{width <= 720 && (
						<div className="nav-links">
							{user ? (
								<div className="item">
									<Avatar
										alt={user.name}
										src={user.image}
									></Avatar>
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
					)}
				</div>
			</div>
			<Drawer
				variant="persistant"
				anchor="left"
				open={drawerOpen}
				className="drawer"
			>
				<IconButton
					onClick={handleDrawerClose}
					sx={{
						color: "white",
					}}
				>
					<span class="material-icons">chevron_left</span>
				</IconButton>
				<Divider className="divider" />
				<div className="nav-links">
					<NavLink onClick={handleLinkClick} to="/">
						<div className="item">Home</div>
					</NavLink>
					<NavLink onClick={handleLinkClick} to="/events">
						<div className="item">Events</div>
					</NavLink>
					<NavLink onClick={handleLinkClick} to="/team">
						<div className="item">Team</div>
					</NavLink>
					<NavLink onClick={handleLinkClick} to="/sponsor">
						<div className="item">Sponsors</div>
					</NavLink>
					<NavLink onClick={handleLinkClick} to="/contact">
						<div className="item">Contact Us</div>
					</NavLink>

					<NavLink onClick={handleLinkClick} to="/register">
						<div className="item">Register</div>
					</NavLink>
					{/* <NavLink to="/schedule">
        <div className="item">Schedule</div>
    </NavLink> */}
					{/* {user ? (
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
					)} */}
				</div>
			</Drawer>
		</>
	);
};

export default Navbar;
