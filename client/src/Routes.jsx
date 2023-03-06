import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Auth from "./pages/Auth";

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