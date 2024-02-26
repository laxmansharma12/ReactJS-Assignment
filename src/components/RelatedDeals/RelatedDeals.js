import React from "react";
import "./RelatedDeals.scss";
import { relatedDeals } from "../../components/data/constants";

const RelatedDeals = () => {
	return (
		<div className="RelatedItem">
			{relatedDeals.map((relatedDealsItems, relatedDealsIndex) => (
				<div className="RelatedItemContainer" key={relatedDealsIndex}>
					<div className="imgContainer">
						<img src={relatedDealsItems.img} />
					</div>

					<div className="offerHead">
						<div className="offer"> {relatedDealsItems.offer}</div>
						<div className="time"> {relatedDealsItems.time}</div>
					</div>
					<div className="header">{relatedDealsItems.heading}</div>
					<div className="details">{relatedDealsItems.details}</div>
					<div className="priceContainer">
						<div className="a">{relatedDealsItems.price1}</div>
						<div className="b">{relatedDealsItems.price2}</div>
						<div className="c">{relatedDealsItems.off}</div>
					</div>
					<button>View Deal</button>
				</div>
			))}
		</div>
	);
};

export default RelatedDeals;
