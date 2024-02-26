import React from "react";
import Nav from "./navbar/Nav.js";
import Body from "./Body/Body.js";
import Footer from "./Footer/Footer.js";

const HomePage = () => {
	return (
		<div className="wrapper">
			<div>
				<Nav />
				<Body />
				<Footer />
			</div>
		</div>
	);
};

export default HomePage;
