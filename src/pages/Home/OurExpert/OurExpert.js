import React from "react";
import { Link } from "react-router-dom";
import "./Expert.css";
function OurExpert() {
	return (
		<section className="expert-section">
			<div className="expert-container">
				<div className="">
					<div className="expert-heading">
						Hand over all your requirements to our travel experts who've curated
						more than 200 itineraries.
					</div>
					<Link className="expert-text" target={"_blank"} to={"https://wa.me/01864361681"}>
						Talk to our expert
					</Link>
					<p className="ex_text">P.S.- We love talking about travel 24*7</p>
				</div>
				<img
					src="https://www.wanderon.in/svg/home/cta-image.svg"
					alt=""
					className="expert_img"
				/>
			</div>
		</section>
	);
}

export default OurExpert;
