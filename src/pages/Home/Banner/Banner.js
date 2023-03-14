import React from "react";
import "./Banner.css";
const Banner = () => {
	return (
		<div className="billy">
			<div className="heading">Weekend Getaways</div>
			<div className="subheading">Weekend Trips From Delhi</div>
			<div className="images">
				<div className="coverHighlight">
					<img src="https://www.wanderon.in/svg/cover-travellers.svg" alt="" />
					<div className="coverHighlightText">
						50000+ <br />
						Happy Travellers
					</div>
				</div>
				<a href="#reviews">
					<div className="coverHighlight">
						<img src="https://www.wanderon.in/svg/cover-star.svg" alt="" />
						<div className="coverHighlightText">
							8600+ <br />5 Stars Reviews
						</div>
					</div>
				</a>
				<div className="coverHighlight">
					<img src="https://www.wanderon.in/svg/cover-destination.svg" alt="" />
					<div className="coverHighlightText">
						300+ <br />
						Itineraries
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
