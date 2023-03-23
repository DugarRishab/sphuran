import React, { useEffect, useState } from 'react';
import { alert } from '../components/CustomAlert/alert';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomTextField from "../components/CustomTextField";
import { updateUserData } from '../services/api';
import { useNavigate } from "react-router-dom";

const Register = ({user, login, logout}) => {
	const [cllg, setCllg] = useState();
	const [dept, setDept] = useState();
	const [year, setYear] = useState();
	const [name, setName] = useState();
	const [phone, setPhone] = useState();

	const navigate = useNavigate();

	const handleSubmit = () => {

		const updateData = async () => {
			if (cllg && dept && year && phone && name) {
				if (
					(year >= 1 && year <= 5) ||
					!phone.toString().length === 10
				) {
					const payload = {
						cllg,
						dept,
						year,
						name,
						phone,
					};
					try {
						console.log("submitting");
						const res = await updateUserData(payload);
						if (res.data.message === "success") {
							alert({
								message: "Successfully Registered",
								type: "success",
							});
							navigate("/");
						}
					} catch (err) {
						alert({
							message: err.response.data.message,
							type: "error",
						});
					}
				} else {
					alert({
						message: "Please Fill all the fields correctly",
						type: "error",
					});
				}
			} else {
				alert({
					message: "Please enter all the details",
					type: "error",
				});
			}
		};
		
		updateData();
	}

	useEffect(() => {
		if (!user) {
			navigate("/auth");
		}
	})
	return (
		<div className="register">
			{user ? (
				<>
					<div className="header">Register</div>
					<div className="lower-body">
						<div className="form">
							<div className="title">
								Bear with us! We just need few more details
							</div>
							<div className="inputs">
								<CustomTextField
									label={"Name"}
									onInput={(e) => setName(e.target.value)}
								></CustomTextField>
								<CustomTextField
									label={"Phone Number"}
									onInput={(e) => setPhone(e.target.value)}
									type="number"
									maxLength="10"
								></CustomTextField>
								<CustomTextField
									label={"College Name"}
									onInput={(e) => setCllg(e.target.value)}
								></CustomTextField>
								<CustomTextField
									label={"Department"}
									onInput={(e) => setDept(e.target.value)}
								></CustomTextField>
								<CustomTextField
									label={"Year"}
									onInput={(e) => setYear(e.target.value)}
									type="number"
									max="4"
									min="1"
								></CustomTextField>
							</div>

							<CustomButton
								text={"Register"}
								variant="contained"
								onClick={handleSubmit}
							></CustomButton>
						</div>
					</div>
				</>
			) : (
				"Please Login"
			)}
		</div>
	);
}
 
export default Register;