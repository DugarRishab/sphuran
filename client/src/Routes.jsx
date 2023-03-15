import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Auth from "./pages/Auth";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Sponsors from "./pages/Sponsors";
import Schedule from "./pages/Schedule";

const AllRoutes = ({userLocation, setUserLocation, user, login, logout}) => {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<Home login={login} logout={logout} user={user}></Home>
				}
			></Route>
			<Route
				exact
				path="/team"
				element={
					<Team login={login} logout={logout} user={user}></Team>
				}
			></Route>
			<Route
				exact
				path="/events"
				element={
					<Events login={login} logout={logout} user={user}></Events>
				}
			></Route>
			<Route
				path="/event"
				element={
					<Event login={login} logout={logout} user={user}></Event>
				}
			></Route>
			<Route
				exact
				path="/sponsor"
				element={
					<Sponsors
						login={login}
						logout={logout}
						user={user}
					></Sponsors>
				}
			></Route>
			<Route
				exact
				path="/schedule"
				element={
					<Schedule
						login={login}
						logout={logout}
						user={user}
					></Schedule>
				}
			></Route>

			<Route
				exact
				path="/auth"
				element={
					<Auth
						login={login}
						logout={logout}
						user={user}
						userLocation={userLocation}
						setUserLocation={setUserLocation}
					></Auth>
				}
			></Route>
		</Routes>
	);
}

export default AllRoutes;