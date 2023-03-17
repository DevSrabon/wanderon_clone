import React from "react";
import TestoCards from "../../../components/TestoCards/TestoCards";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import CustomiseTrips from "../CustomiseTrips/CustomiseTrips";
import Explore from "../Explore/Explore";
import OurExpert from "../OurExpert/OurExpert";
import SecretSauce from "../SecretSauce/SecretSauce";
import UpcommingTrips from "../UpcomingTrips/UpcommingTrips";
import Experience from "../Experience/Experience";
import Backpacking from "../Backpacking/Backpacking";

const Home = () => {
	return (
		<div>
			<Banner />
			<Explore />
			<UpcommingTrips />
			<Backpacking/>
			<OurExpert />
			<CustomiseTrips />
			<SecretSauce />
			<Testimonials />
			<TestoCards />
			<Experience/>
		</div>
	);
};

export default Home;
