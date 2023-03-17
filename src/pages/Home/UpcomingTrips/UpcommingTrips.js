import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Card from '../../../components/Cards/Cards';
import "./UpcommingTrips.css"
const UpcommingTrips = () => {
	const [selectedOption, setSelectedOption] = useState("");
	
   	const { data, isLoading } = useQuery({
			queryKey: [ selectedOption],
			queryFn: async () => {
				const res = fetch(
					`https://wanderon-sever-clone.vercel.app/upcoming?option=${
						selectedOption ? selectedOption : "0"
					}`
				);
				const data = (await res).json();
				return data;
			},
		});
	  const handleSelectChange=(event) =>{
			setSelectedOption(event.target.value);
		}
	
	if (isLoading) {
		return <>loading..</>;
	}
    return (
			<section className="upcoming-section">
				<div className="upcoming-heading">
					<div className="upcoming">
						<h3>Upcoming Trips</h3>
						<select value={selectedOption} onChange={handleSelectChange}>
							<option value="0">mar '23</option>
							<option value="1">apr '23</option>
							<option value="2">may '23</option>
						</select>
					</div>
				</div>
				<div className="swiper-container">
					<Card data={data} />
				</div>
				
				
			</section>
		);
};

export default UpcommingTrips;