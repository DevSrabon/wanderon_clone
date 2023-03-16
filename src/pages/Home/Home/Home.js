import React from "react";
import TestoCards from "../../../components/TestoCards/TestoCards";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import CustomiseTrips from "../CustomiseTrips/CustomiseTrips";
import Explore from "../Explore/Explore";
import OurExpert from "../OurExpert/OurExpert";
import SecretSauce from "../SecretSauce/SecretSauce";
import UpcommingTrips from "../UpcomingTrips/UpcommingTrips";

const Home = () => {
	return (
		<div>
			<Banner />
			<Explore />
			<UpcommingTrips />
			<OurExpert />
			<CustomiseTrips />
			<SecretSauce />
			<Testimonials />
			<TestoCards/>
		</div>
	);
};

export default Home;
