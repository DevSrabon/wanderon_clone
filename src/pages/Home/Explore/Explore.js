import React from "react";
import { Link } from "react-router-dom";
import "./Explore.css";
const Explore = () => {
	const data = [
		{
			img: "https://www.wanderon.in/svg/motorcycle.png",
			text: "Leh Ladakh 2023",
		},
		{
			img: "https://www.wanderon.in/svg/jeep.png",
			text: "Spiti Valley 2023",
		},
		{
			img: "https://www.wanderon.in/svg/hiking.png",
			text: "Good Friday Weekend",
		},
		{
			img: "https://www.wanderon.in/svg/backpacking-trips.svg",
			text: "Backpacking Trips",
		},
		{
			img: "https://www.wanderon.in/svg/weekend-trips.svg",
			text: "Weekend Trips",
		},
		{
			img: "https://www.wanderon.in/svg/customised-trips.svg",
			text: "Customised Trips",
		},
	];
	return (
		<section className="explore-container">
			<h1>Explore WanderOn</h1>
			<div className="explore-card-container">
				{data.map((item, i) => {
					return (
						<Link to={""} key={i}>
							{" "}
							<div className="explore-card">
								<img src={item.img} alt="" /> <p className="">{item.text}</p>
							</div>{" "}
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Explore;
