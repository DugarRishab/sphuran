import React from 'react';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomTextField from "../components/CustomTextField";

const Register = () => {
	return (
		<div className="register">
			<div className="header">Register</div>
			<div className="lower-body">
				<div className="form">
					<div className="title">
						Bear with us! We just need few more details
					</div>
					
					<CustomTextField
						label={"Your College Name"}
					></CustomTextField>
					<CustomTextField
						label={"Your College Name"}
					></CustomTextField>
					<CustomTextField
						label={"Your College Name"}
					></CustomTextField>
					<CustomButton
						text={"Register"}
						variant="contained"
					></CustomButton>
				</div>
			</div>
		</div>
	);
}
 
export default Register;