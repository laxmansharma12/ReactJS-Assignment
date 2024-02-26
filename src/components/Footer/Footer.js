import React from "react";
import "./Footer.scss";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
	return (
		<div className="Footerwrapper">
			<div className="container">
				<div className="listContainer">
					<div className="Title">CATEGORY</div>
					<a>Web Builder</a>
					<a>Hosting</a>
					<a>Data Center</a>
					<a>Robotic-Automation</a>
				</div>
				<div className="listContainer">
					<div className="Title">CONTACT</div>
					<a>Contact</a>
					<a>Privacy Policy</a>
					<a>Terms Of Service</a>
					<a>Categories</a>
					<a>About</a>
				</div>
				<div className="listContainer">
					<div className="item">
						<a>United States</a>
						<IoIosArrowDown style={{ color: "#b6bdc4" }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
