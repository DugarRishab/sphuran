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
							<a href="mailto: ssengupta742@gmail.com">
								ssengupta742@gmail.com
							</a>
						</div>
					</div>
					<div className="contact3">
						<div className="name"> Sayan Mitra </div>
						<div className="mail">
							<a href="mailto: mitrasayan2001@gmail.com">
								mitrasayan2001@gmail.com
							</a>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
}
 
export default Footer;