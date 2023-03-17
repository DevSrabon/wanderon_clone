import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
			<footer className="flex flex-col">
				<div className="footer_div1">
					<div className="footer_about">
						<Link to={""}>About us</Link>
						<div className="">
							We at WanderOn are a modern travel community that provides end to
							end travel packages in India and abroad. We design the best travel
							itineraries that encourage group traveling for like-minded people.
							Our services include road trips, trekking expeditions, corporate
							trips, and customized tour packages. On our trips, we ensure
							hassle-free traveling, top-notch accommodation and guided
							sightseeing that too in a budget that won’t burn a hole in your
							pocket. Just give us your dates and be ready to experience
							traveling like never before.
						</div>
					</div>
					<div className="footer_trips">
						<div className="footer_trip">
							<Link to={""}>Weekend Trips</Link>
							<div className="">
								<a href="/trip/bir-billing">Bir Billing</a>
								<a href="/trip/chopta-tungnath">Chopta Tungnath</a>
								<a href="/trip/kasol-kheerganga">Kasol Kheerganga</a>
								<a href="/trip/tirthan-valley">Tirthan Valley</a>
								<a href="/trip/manali-solang">Manali Solang</a>
							</div>
						</div>
						<div className="footer_trip">
							<a
								href="/backpacking-trips"
								className="Footer__FooterHeading-sc-1f24jl1-6 eMPtyM">
								Backpacking Trips
							</a>
							<div className="Footer__FooterList-sc-1f24jl1-8 cDRmcQ">
								<a href="/trip/himachal-backpacking-year-end">
									Himachal Backpacking
								</a>
								<a href="/spiti">Spiti Valley Trips</a>
								<a href="/ladakh">Ladakh Trips</a>
								<a href="/trip/meghalaya-road-trip">Meghalaya Backpacking</a>
								<a href="/trip/kashmir-winter-backpacking">
									Kashmir Backpacking
								</a>
							</div>
						</div>
						<div className="footer_trip">
							<a
								href="/himalayan-escapades"
								className="Footer__FooterHeading-sc-1f24jl1-6 eMPtyM">
								Himalayan Escapades
							</a>
							<div className="Footer__FooterList-sc-1f24jl1-8 cDRmcQ">
								<a href="/trip/kasol-kheerganga-manali">Kasol Manali</a>
								<a href="/trip/parvati-valley-summer">Parvati Valley</a>
								<a href="/trip/bir-kasol-kheerganga">Bir Kasol</a>
								<a href="/trip/mcleodganj-bir-tirthan">Mcleod Bir Tirthan</a>
								<a href="/trip/mcleodganj-bir-barot">Mcleod Bir Barot</a>
							</div>
						</div>
						<div className="footer_trip">
							<a
								href="/blogs"
								className="Footer__FooterHeading-sc-1f24jl1-6 eMPtyM">
								Blogs
							</a>
							<div className="Footer__FooterList-sc-1f24jl1-8 cDRmcQ">
								<a href="/blogs/places-to-visit-in-spring">
									Beautiful Places to Visit in Spring in India
								</a>
								<a href="/blogs/workcations-the-new-normal-of-work-life">
									Workcations: The New Trend of Travel
								</a>
								<a href="/blogs/monasteries-of-ladakh-to-visit-for-a-rejuvenating-holiday">
									Breathtaking Monasteries of Ladakh
								</a>
								<a href="/blogs/places-to-visit-in-spiti-valley">
									Soul-Satisfying things to do in Spiti Valley
								</a>
								<a href="/blogs/scenic-waterfalls-to-visit-in-meghalaya">
									Mesmerising Waterfalls of Meghalaya to Visit
								</a>
							</div>
						</div>
					</div>
					<div className="footer_policy">
						<h4 className="">Quick Links</h4>
						<div className="">
							<a
								href="/privacy-policy"
								className="Footer__FooterHeading-sc-1f24jl1-6 eMPtyM">
								Privacy Policy
							</a>
							<a
								href="/cancellation-policy"
								className="Footer__FooterHeading-sc-1f24jl1-6 eMPtyM">
								Cancellation Policy
							</a>
							<a
								href="/tnc"
								className="Footer__FooterHeading-sc-1f24jl1-6 eMPtyM">
								Terms &amp; Conditions
							</a>
							<a
								href="/disclaimer"
								className="Footer__FooterHeading-sc-1f24jl1-6 eMPtyM">
								Disclaimer
							</a>
							<a
								href="/about-us"
								className="Footer__FooterHeading-sc-1f24jl1-6 eMPtyM">
								About Us
							</a>
						</div>
					</div>
				</div>
				<div className="footer_div2">
					<div className="">
						<a
							href="https://www.facebook.com/wander.on"
							className="Footer__SocialLink-sc-1f24jl1-14 hLVdCZ">
							<img
								alt=""
								src="https://www.wanderon.in/svg/footer/facebook.svg"
								className="Footer__SocialObject-sc-1f24jl1-15 ibNCRl"
							/>
						</a>
						<a
							href="https://www.instagram.com/wander.on/"
							className="Footer__SocialLink-sc-1f24jl1-14 hLVdCZ">
							<img
								alt=""
								src="https://www.wanderon.in/svg/footer/instagram.svg"
								className="Footer__SocialObject-sc-1f24jl1-15 ibNCRl"
							/>
						</a>
						<a
							href="https://in.pinterest.com/pin/801851908642464419"
							className="Footer__SocialLink-sc-1f24jl1-14 hLVdCZ">
							<img
								alt=""
								src="https://www.wanderon.in/svg/footer/pinterest.svg"
								className="Footer__SocialObject-sc-1f24jl1-15 ibNCRl"
							/>
						</a>
						<a
							href="https://www.linkedin.com/company/wanderontravelcommunity"
							className="Footer__SocialLink-sc-1f24jl1-14 hLVdCZ">
							<img
								alt=""
								src="https://www.wanderon.in/svg/footer/linkedin.svg"
								className="Footer__SocialObject-sc-1f24jl1-15 ibNCRl"
							/>
						</a>
						<a
							href="https://www.youtube.com/c/WanderOn/"
							className="Footer__SocialLink-sc-1f24jl1-14 hLVdCZ">
							<img
								alt=""
								src="https://www.wanderon.in/svg/footer/youtube.svg"
								className="Footer__SocialObject-sc-1f24jl1-15 ibNCRl"
							/>
						</a>
					</div>
					<div className="">
						<div className="Footer__AddressTitle-sc-1f24jl1-17 ihYVFb">
							address
						</div>
						<div className="Footer__AddressText-sc-1f24jl1-18 jGTbPl">
							WANDERON EXPERIENCES PVT LTD
						</div>
						<div className="Footer__AddressText-sc-1f24jl1-18 jGTbPl">
							3rd Floor, Building No-750, Phase V, Udyog Vihar, Sector-19,
							Gurugram, Haryana-122022
						</div>
					</div>
					<div className="">
						<a
							href="mailto:hello@wanderon.in"
							className="Footer__ContactsObject-sc-1f24jl1-20 kSOouz">
							hello@wanderon.in
						</a>
						<a
							href="tel:9870301533"
							className="Footer__ContactsObject-sc-1f24jl1-20 kSOouz">
							+91-9870301533
						</a>
						<a
							href='https://www.wanderon.infalse ? campaignParams : ""'
							className="Footer__ContactsObject-sc-1f24jl1-20 kSOouz">
							www.wanderon.in
						</a>
					</div>
				</div>
			</footer>
		);
};

export default Footer;