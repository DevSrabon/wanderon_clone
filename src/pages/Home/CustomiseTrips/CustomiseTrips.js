import React from 'react';
import Card from '../../../components/Cards/Cards';
import TripCard from '../../../components/TripCard/TripCard';
import "./CustomiseTrips.css"
const CustomiseTrips = () => {
    const data = [
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/lempuyang-temple-1.jpg",
				title: "bali",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/maldives.jpg",
				title: "maldives",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/lempuyang-temple-1.jpg",
				title: "bali",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/maldives.jpg",
				title: "maldives",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/lempuyang-temple-1.jpg",
				title: "bali",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/maldives.jpg",
				title: "maldives",
			},
		];
    return (
			<div className="customize_container">
				<h2>CUSTOMISE YOUR TRIP</h2>
				<p>
					Didn’t find what you were looking for? Have a look at our customized
					trips curated for your group and plan your next vacation with
					WanderOn!
            </p>
            <div className="w-[87vw] md:mt-[32px] p-[16px]">
                <TripCard data={data}/>
            </div>
			</div>
		);
};

export default CustomiseTrips;