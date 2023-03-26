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
					<div className="contact">
						<div className="name"> Sayan Mitra </div>
						<div className="mail">
							<a href="mailto: mitrasayan2001@gmail.com">
								mitrasayan2001@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="right-col-2">
				<div className="title">Visit us Virtually</div>
				<div className="socials">
					<div className="item">
						<div className="logo">
							<i class="fa-brands fa-facebook-f"></i>
						</div>
						<div className="link">
							<a href="https://facebook.com/sphuran.ees">
								/sphuran.ees
							</a>
						</div>
					</div>
					<div className="item">
						<div className="logo">
							<i class="fa-brands fa-instagram"></i>
						</div>
						<a href="https://instagram.com/_sphuran">
							<div className="link">/_sphuran</div>
						</a>
					</div>
					<div className="item">
						<div className="logo">
							<i class="fa-brands fa-linkedin-in"></i>
						</div>
						<div className="link">
							<a href="https://linkedin.com/in/sphuran-iiests">
								/sphuran-iiests
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Footer;