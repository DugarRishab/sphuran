import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<div className="left-col">
				<div className="logo">
					<img src="/assets/sphuran-logo.png" alt="" />
				</div>
				<div className="name">Sphuran 2.0</div>
			</div>
			<div className="right-col">
				<div className="title">Contacts</div>
				<div className="contacts">
					<div className="contact">
						<div className="name"> Prof. Bhaskaran Barman</div>
						<div className="mail">
							<a href="mailto: bhaskaran.ee@faculty.iiests.ac.in">
								bhaskaran.ee@faculty.iiests.ac.in
							</a>
						</div>
					</div>
					<div className="contact">
						<div className="name"> Souvik Sengupta</div>
						<div className="mail">
							<a href="mailto: 510619091.souvik@students.iiests.ac.in">
								510619091.souvik@students.iiests.ac.in
							</a>
						</div>
					</div>
					<div className="contact">
						<div className="name"> Dilshad Adil </div>
						<div className="mail">
							<a href="mailto: 2020eeb08.dilshad@students.iiests.ac.in">
								2020eeb08.dilshad@students.iiests.ac.in
							</a>
						</div>
					</div>
					<div className="contact">
						<div className="name"> Rituraj Ranjan Mishra</div>
						<div className="mail">
							<a href="mailto: 2020eeb075.rituraj@students.iiests.ac.in">
								2020eeb075.rituraj@students.iiests.ac.in
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Footer;