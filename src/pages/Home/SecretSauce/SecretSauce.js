import React from "react";
import SecretCard from "../../../components/SecretCard/SecretCard";
import "./SecretSauce.css";
const SecretSauce = () => {
	return (
		<section className="secret_container">
			<h2>WanderOn's Secret Sauce</h2>
			<div>
				<div className="block md:hidden">
					<SecretCard />
				</div>
				<div className="md:block hidden">
					<div className="item_container">
						<div className="item_card">
							<img
								src="https://www.wanderon.in/offer-page/third-party.svg"
								alt=""
							/>
							<div className="item_heading">No Third Party Mess</div>
							<div className="item_text">
								All the trips at WanderOn are managed end to end by our in-house
								operations team. There are no third parties involved and hence
								no fishy claims. So when we say your travel plan is 100% our
								responsibility, we mean it.
							</div>
						</div>
						<div className="item_card">
							<img
								src="https://www.wanderon.in/offer-page/transparency.svg"
								alt=""
							/>
							<div className="item_heading">Transparency & Security</div>
							<div className="item_text">
								All the Itineraries are backed up by a strong ground team that
								monitors every route and condition real time. This ensures
								transparency and solidifies the security measures for all our
								travelers.
							</div>
						</div>
						<div className="item_card">
							<img
								src="https://www.wanderon.in/offer-page/travel-insurance.svg"
								alt=""
							/>
							<div className="item_heading">Co-travellers Filtering</div>
							<div className="item_text">
								Group trips are fun when you have like-minded fellow travelers.
								We assure that through a well-defined filtering process at all
								the stages, beginning from marketing, sales to operations.
							</div>
						</div>
						<div className="item_card">
							<img
								src="https://www.wanderon.in/offer-page/one-stop.png"
								alt=""
							/>
							<div className="item_heading">
								One stop hassle free experience
							</div>
							<div className="item_text">
								Our entire team puts rigorous efforts on ground to make sure
								your experience is a top notch one. Awesome stays, friendly
								drivers, hospitable ground staff is ready to make your trip the
								most memorable for lifetime.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SecretSauce;
