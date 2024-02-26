import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./Nav.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<div className="nav">
			<div className="search">
				<CiSearch color="#626E79" />
				<input></input>
			</div>

			<div className="navItems">
				<a>Categories</a>
				<a>Website Byulders</a>
				<a>Today's deals</a>
			</div>
			<div className="mobileIcon">
				{!showNav && <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />}
				{showNav && <RxCross2 onClick={() => setShowNav(!showNav)} />}
			</div>
			{showNav && (
				<div className="navItemsMobile">
					<a>Categories</a>
					<a>Website Byulders</a>
					<a>Today's deals</a>
				</div>
			)}
		</div>
	);
};

export default Nav;
