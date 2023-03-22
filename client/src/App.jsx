import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navabr";
import AllRoutes from "./Routes";
import { useState } from "react";
import Footer from "./components/Footer";

import "./App.css";
import Circle from "./components/Circle/Circle";

export const themeOptions = {
	palette: {
		type: "dark",
		primary: {
			main: "#ff5252",
		},
		secondary: {
			main: "#ff8a80",
		},
		background: {
			paper: "rgb(15, 15, 15)",
			default: "rgb(15, 15, 15)",
		},
		success: {
			main: "#27c52f",
		},
		inactive: {
			main: "rgb(150, 150, 150)",
		},
		black: {
			main: "rgb(0, 0, 0)",
		},
		warning: {
			main: "#ff9800",
		},
		error: {
			main: "#FF4242",
		},
	},
	typography: {
		fontFamily: "Exo 2",
		// color: "white"
	},
	overrides: {
		MuiAppBar: {
			colorInherit: {
				backgroundColor: "#111111",
				color: "#fff",
			},
		},
	},
	props: {
		MuiAppBar: {
			color: "secondary",
		},
	},
};

const theme = createTheme(themeOptions);


function App() {

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};
	const logout = () => {
		setUser(null);
		localStorage.setItem("user", JSON.stringify(null));
	};

	return (
		<ThemeProvider theme={theme}>
			<GoogleOAuthProvider clientId="864641738960-hmru6vpqugdtpct6rogp74h2tqvck1ff.apps.googleusercontent.com">
				<div className="App">
					<div className="bg">
						<img src="/assets/Gradient1.jpg" alt="" />
						<img src="/assets/Gradient2.jpg" alt="" />
						{/* <img src="/assets/Gradient3.jpg" alt="" /> */}
					</div>

					<Router>
						<Circle></Circle>
						<Navbar user={user}></Navbar>
						<AllRoutes
							user={user}
							login={login}
							logout={logout}
						></AllRoutes>
						<Footer></Footer>
					</Router>
				</div>
			</GoogleOAuthProvider>
		</ThemeProvider>
	);
}

export default App;
