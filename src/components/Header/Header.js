import React from "react";
import "./Header.scss";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

const Header = () => {
	return (
		<div className="main">
			<h1>Best Website builders in the US</h1>
			<div className="hr"></div>
			<div className="wrapperUp">
				<div className="left">
					<div className="leftInner">
						<FaRegCheckCircle color="#626E79" />
						<label>Last Updated - February 22, 2020</label>
					</div>
					<div className="leftInner">
						<IoInformationCircleOutline className="iconInfo" color="#626E79" />
						<label>Advertising Disclosure</label>
					</div>
				</div>
				<div className="right">
					<label>Top Relevant</label>
					<IoIosArrowDown color="#626E79" />
				</div>
			</div>
			<div className="hr"></div>
			<div className="wrapperMid">
				<label>Tools</label>
				<label>AWS Builder</label>
				<label>Start Build</label>
				<label>Build Supplies</label>
				<label>Tooling</label>
				<label>BlueHosting</label>
			</div>
			<div className="wrapperDown">
				<label>Home</label>
				<AiOutlineRight color="#5C6874" size={13} />
				<label>Hosting for all</label>
				<AiOutlineRight color="#5C6874" size={13} />
				<label>Hosting</label>
				<AiOutlineRight color="#5C6874" size={13} />
				<label>Hosting6</label>
				<AiOutlineRight color="#5C6874" size={13} />
				<label>Hosting5</label>
			</div>
		</div>
	);
};

export default Header;
