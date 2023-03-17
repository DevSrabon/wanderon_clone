import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card2 from '../../../components/Cards2/Cards2';
import "../UpcomingTrips/UpcommingTrips.css"
const Backpacking = () => {
     	const { data:backpack, isLoading } = useQuery({
				queryKey: ["backpacking"],
				queryFn: async () => {
					const res = fetch(
						`https://wanderon-sever-clone.vercel.app/backpacking`
					);
					const data = (await res).json();
					return data;
				},
          });
    return (
			<section className="upcoming-section">
				<div className="upcoming-heading mt-[3vw]">
					<div className="upcoming">
						<h3>Backpacking Trips 2023</h3>
					</div>
				</div>
				<div className="swiper-container">
					<Card2 backpack={backpack} />
				</div>
				<div className="upcoming-heading mt-[3vw]">
					<div className="upcoming">
						<h3>Weekend Trips 2023</h3>
					</div>
				</div>
				<div className="swiper-container">
					<Card2 backpack={backpack} />
				</div>
			</section>
		);
};

export default Backpacking;