import React from "react";
import Header from "../Header/Header";
import "./Body.scss";
import { details } from "../../components/data/constants";
import { CDK } from "../../components/data/constants";
import RelatedDeals from "../RelatedDeals/RelatedDeals";

const Body = () => {
	return (
		<div className="Wrapper">
			<Header />
			<div className="subWrapper">
				{details.map((item, index) => (
					<div className="item" key={index}>
						<div className="itemBody">
							{item.tag.map((tagItem, tagIndex) => (
								<div className="tag" key={tagIndex}>
									{tagItem.icon && tagItem.label && (
										<div className="title">
											{tagItem.icon}
											{tagItem.label}
										</div>
									)}
									{!tagItem.icon && !tagItem.label && (
										<div
											className="title"
											style={{ backgroundColor: "transparent" }}
										></div>
									)}
									{item.no === "1" ? (
										<div className="no" style={{ borderColor: "#fff" }}>
											{item.no}
										</div>
									) : (
										<div className="no">{item.no}</div>
									)}
								</div>
							))}

							{item.img.map((imgItem, imgIndex) => (
								<div className="imgContainer" key={imgIndex}>
									<img src={imgItem.url} alt={imgItem.label} />
									<label>{imgItem.label}</label>
								</div>
							))}
							{item.body.map((bodyItem, bodyIndex) => (
								<div className="bodyContainer" key={bodyIndex}>
									<div className="mainDetails">
										<span className="heading">{bodyItem.heading}</span>{" "}
										<span className="details">{bodyItem.details}</span>
									</div>
									<div className="subHeadingContainer">
										<h3 className="subheading">{bodyItem.subheading}</h3>
										<div className="subDetails">{bodyItem.subdetails}</div>
									</div>

									{bodyItem.showmore.map((showMoreItem, showMoreIndex) => (
										<div className="showMore" key={showMoreIndex}>
											{showMoreItem.label} {showMoreItem.icon}{" "}
										</div>
									))}
								</div>
							))}
							{item.rating.map((ratingItem, ratingIndex) => (
								<div className="ratingContainer" key={ratingIndex}>
									<div className="ratingBanner">
										<div className="info">{ratingItem.info}</div>
										<div className="rate">{ratingItem.rate}</div>
										<label className="label">{ratingItem.level}</label>
										<div className="stars">{ratingItem.stars}</div>
									</div>
									<button>View</button>
								</div>
							))}
						</div>
					</div>
				))}

				{CDK.map((item, index) => (
					<div className="CDKitem" key={index}>
						<div className="CDKitemBody">
							{item.tag.map((tagItem, tagIndex) => (
								<div className="tag" key={tagIndex}>
									{tagItem.icon && tagItem.label && (
										<div className="title">
											{tagItem.icon}
											{tagItem.label}
										</div>
									)}
									{!tagItem.icon && !tagItem.label && (
										<div
											className="title"
											style={{ backgroundColor: "transparent" }}
										></div>
									)}
									<div className="no">{item.no}</div>
								</div>
							))}

							{item.img.map((imgItem, imgIndex) => (
								<div className="imgContainer" key={imgIndex}>
									<img src={imgItem.url} alt={imgItem.label} />
									<label>{imgItem.label}</label>
								</div>
							))}
							{item.body.map((bodyItem, bodyIndex) => (
								<div className="bodyContainer" key={bodyIndex}>
									<div className="mainDetails">
										<span className="heading">{bodyItem.heading}</span>{" "}
										<span className="details">{bodyItem.details}</span>
									</div>

									<div className="offer"> {bodyItem.offer}</div>

									<div className="subHeadingContainer">
										<h3 className="subheading">{bodyItem.subheading}</h3>
										<div className="subSDKDetails">
											{bodyItem.subdetails.map(
												(subdetailsItem, subdetailsIndex) => (
													<div className="list" key={subdetailsIndex}>
														<div className="num">{subdetailsItem.num}</div>
														<label>{subdetailsItem.label}</label>
													</div>
												)
											)}
										</div>
									</div>

									<div className="whyContainer">
										<h3 className="subWhyheading">{bodyItem.why}</h3>
										{bodyItem.list.map(
											(subWhydetailsItem, subWhydetailsIndex) => (
												<div className="list" key={subWhydetailsIndex}>
													<div className="icon">{subWhydetailsItem.icon}</div>
													<label>{subWhydetailsItem.label}</label>
												</div>
											)
										)}
									</div>

									{bodyItem.showmore.map((showMoreItem, showMoreIndex) => (
										<div className="showMore" key={showMoreIndex}>
											{showMoreItem.label} {showMoreItem.icon}{" "}
										</div>
									))}
								</div>
							))}
							{item.rating.map((ratingItem, ratingIndex) => (
								<div className="ratingContainer" key={ratingIndex}>
									<div className="ratingBanner">
										<div className="rate">{ratingItem.rate}</div>
										<label className="label">{ratingItem.level}</label>
										<div className="stars">{ratingItem.stars}</div>
									</div>
									<button>View</button>
								</div>
							))}
						</div>
					</div>
				))}

				<h1 className="relatedHeader">Related deals you might like for</h1>
				<div className="relatedDealContainer">
					<RelatedDeals />
					<RelatedDeals />
					<RelatedDeals />
				</div>

				<div className="signUpContainer">
					<label>Sign up and get exclusive special deals</label>
					<div className="form">
						<input></input>
						<button>Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Body;
