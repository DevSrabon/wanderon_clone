import React from "react";
import Banner from "../Banner/Banner";
import CustomiseTrips from "../CustomiseTrips/CustomiseTrips";
import Explore from "../Explore/Explore";
import OurExpert from "../OurExpert/OurExpert";
import UpcommingTrips from "../UpcomingTrips/UpcommingTrips";

const Home = () => {
	return (
		<div>
			<Banner />
			<Explore />
			<UpcommingTrips />
			<OurExpert />
			<CustomiseTrips/>
		</div>
	);
};

export default Home;
