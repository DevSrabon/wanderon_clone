import React from 'react';
import Card from '../../../components/Cards/Cards';
import "./UpcommingTrips.css"
const UpcommingTrips = () => {
    const data = [
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/meghalaya-kaziranga-exclusive/boating-in-meghalaya.jpg",
				imgTitle1: "Camping",
				imgTitle2: "Trekking",
				day: "6N-7D",
				location: "Guwahati",
				pkgName: "Meghalaya With Kaziranga - Exclusive Escape",
				price: "27,999",
				bookDate: "25Mar",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/kashmir-winter-backpacking/wanderon-kashmir-1.jpg",
				imgTitle1: "Trekking",
				imgTitle2: "Snow Paradise",
				day: "5N-6D",
				location: "Srinagar",
				pkgName: "Kashmir Winter Expedition",
				price: "26,499",
				bookDate: "18, 25Mar",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/meghalaya-kaziranga-exclusive/boating-in-meghalaya.jpg",
				imgTitle1: "Camping",
				imgTitle2: "Trekking",
				day: "6N-7D",
				location: "Guwahati",
				pkgName: "Meghalaya With Kaziranga - Exclusive Escape",
				price: "27,999",
				bookDate: "25Mar",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/kashmir-winter-backpacking/wanderon-kashmir-1.jpg",
				imgTitle1: "Trekking",
				imgTitle2: "Snow Paradise",
				day: "5N-6D",
				location: "Srinagar",
				pkgName: "Kashmir Winter Expedition",
				price: "26,499",
				bookDate: "18, 25Mar",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/meghalaya-kaziranga-exclusive/boating-in-meghalaya.jpg",
				imgTitle1: "Camping",
				imgTitle2: "Trekking",
				day: "6N-7D",
				location: "Guwahati",
				pkgName: "Meghalaya With Kaziranga - Exclusive Escape",
				price: "27,999",
				bookDate: "25Mar",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/kashmir-winter-backpacking/wanderon-kashmir-1.jpg",
				imgTitle1: "Trekking",
				imgTitle2: "Snow Paradise",
				day: "5N-6D",
				location: "Srinagar",
				pkgName: "Kashmir Winter Expedition",
				price: "26,499",
				bookDate: "18, 25Mar",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/meghalaya-kaziranga-exclusive/boating-in-meghalaya.jpg",
				imgTitle1: "Camping",
				imgTitle2: "Trekking",
				day: "6N-7D",
				location: "Guwahati",
				pkgName: "Meghalaya With Kaziranga - Exclusive Escape",
				price: "27,999",
				bookDate: "25Mar",
			},
			{
				url: "https://ik.imagekit.io/workcations/gallery/triplist/kashmir-winter-backpacking/wanderon-kashmir-1.jpg",
				imgTitle1: "Trekking",
				imgTitle2: "Snow Paradise",
				day: "5N-6D",
				location: "Srinagar",
				pkgName: "Kashmir Winter Expedition",
				price: "26,499",
				bookDate: "18, 25Mar",
			},
			
		];
    return (
			<section className="upcoming-section">
				<div className="upcoming-heading">
					<div className="upcoming">
						<h3>Upcoming Trips</h3>
						<select name="months" id="months">
							<option value="0">mar '23</option>
							<option value="1">apr '23</option>
							<option value="2">may '23</option>
						</select>
					</div>
				</div>
				<div className="swiper-container">
					<Card data={data} />
				</div>
				<div className="upcoming-heading mt-[3vw]">
					<div className="upcoming">
						<h3>Backpacking Trips 2023</h3>
					</div>
				</div>
				<div className="swiper-container">
					<Card data={data} />
				</div>
				<div className="upcoming-heading mt-[3vw]">
					<div className="upcoming">
						<h3>Weekend Trips 2023</h3>
					</div>
				</div>
				<div className="swiper-container">
					<Card data={data} />
				</div>
			</section>
		);
};

export default UpcommingTrips;