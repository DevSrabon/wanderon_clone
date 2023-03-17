import React, { useEffect, useState } from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import { useQuery } from "@tanstack/react-query";
const Banner = () => {
	const [selectedOption, setSelectedOption] = useState("");
	const { data, isLoading } = useQuery({
		queryKey: [selectedOption],
		queryFn: async () => {
			const res = fetch(
				`http://localhost:5000/searchone?pkgName=${
					selectedOption ? selectedOption : ""
				}`
			);
			const data = (await res).json();
			return data;
		},
	});
	
	
	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	
	return (
		<div className="billy">
			<div className="heading">India's Coolest Travel Community</div>
			<div className="subheading">
				<Typewriter
					options={{
						strings: [
							" Creating Stories",
							" Fulfilling Adventure",
							" Connecting People",
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
			<div className="search-container">
				<div className="search-field">
					<input
						onChange={handleSelectChange}
						type="input"
						autoComplete="off"
						name="search"
						placeholder="Where do you wanna go?"
					/>
					<img
						src="https://www.wanderon.in/svg/search.svg"
						alt=""
						className=" w-[10vw] h-[10vw] sm:w-[4vw] sm:h-[4vw] rounded-r-md -ml-[4vw] bg-[#0a9e88]"
					/>
				</div>
				<div className="eiHLdy">
					{
						data?.map(item =>
							
							<div className="haakOc">{item?.pkgName}</div>
							)
						}
				</div>
			</div>
			<div className="images-container flex mb-[6vh]">
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
