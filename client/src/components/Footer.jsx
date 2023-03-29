import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<div className="left-col">
				<div className="logo">
					<img src="/assets/sphuran-logo.png" alt="" />
				</div>
				<div className="name">Sphuran 2.0</div>
				<div className="logos">
					<div className="item">
						<img src="/assets/EES_edited.png" alt="" />
					</div>
					<div className="divider"></div>
					<div className="item">
						<img src="/assets/iiest-logo-white.png" alt="" />
					</div>
				</div>
				<div className="address">
					{/*Department of Electrical Engineering,*/} Sphuran, IIEST SHIBPUR, PO:
					Botanic Garden, Botanical Garden Road, IIEST
					Shibpur, Howrah-711103, West Bengal
				</div>
			</div>
			<div className="right-col">
				<div className="title">Contacts</div>
				<div className="contacts">
					<div className="contact">
						<div className="name">
							Sphuran
						</div>
						<div className="mail">
							<a href="mailto: bhaskaran.ee@faculty.iiests.ac.in">
								sphuran.ees@gmail.com
							</a>
						</div>
					</div>
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
						<div className="ph-num">ph: +91 82505 64473</div>
					</div>
					<div className="contact">
						<div className="name"> Sayan Mitra </div>
						<div className="mail">
							<a href="mailto: mitrasayan2001@gmail.com">
								mitrasayan2001@gmail.com
							</a>
						</div>
						<div className="ph-num">ph: +91 93324 29359</div>
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
					<div className="item">
						<div className="logo">
							<i class="fa-brands fa-youtube"></i>
						</div>
						<div className="link">
							<a href="https://youtube.com/@sphuranees">
								/@sphuranees
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Footer;