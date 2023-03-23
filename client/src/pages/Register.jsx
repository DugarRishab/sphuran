import React, { useState } from 'react';
import { alert } from '../components/CustomAlert/alert';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomTextField from "../components/CustomTextField";
import { updateUserData } from '../services/api';
import { useNavigate } from "react-router-dom";

const Register = ({user, login, logout}) => {
	const [cllg, setCllg] = useState();
	const [dept, setDept] = useState();
	const [year, setYear] = useState();

	const navigate = useNavigate();

	const handleSubmit = async () => {
		if (cllg && dept && year) {
			if (year >= 1 && year <= 4) {
				const payload = {
					cllg,
					dept,
					year
				};
				try {
					const res = await updateUserData(payload);
					if (res.data.message === "success") {
						alert({
							message: "Successfully Registered",
							type: "success",
						});
						navigate("/");
					}
				}
				catch (err) {
					alert({
						message: err.response.data.message,
						type: "error",
					});
				}
			}
			else {
				alert({message: "Year must be between 1 and 4", type: "error"})
			}
		}
	}
	return (
		<div className="register">
			{
				user? (<><div className="header">Register</div><div className="lower-body">
					<div className="form">
						<div className="title">
							Bear with us! We just need few more details
						</div>

						<CustomTextField
							label={"Your College Name"}
							onInput={(e) => setCllg(e.target.value)}
						></CustomTextField>
						<CustomTextField
							label={"Your Department"}
							onInput={(e) => setDept(e.target.value)}
						></CustomTextField>
						<CustomTextField
							label={"Your Year"}
							onInput={(e) => setYear(e.target.value)}
							type="number"
							max="4"
							min="1"
						></CustomTextField>
						<CustomButton
							text={"Register"}
							variant="contained"
							onClick={handleSubmit}
						></CustomButton>
					</div>
				</div></>) : (
					"Please Login"
				)
			}
			
		</div>
	);
}
 
export default Register;