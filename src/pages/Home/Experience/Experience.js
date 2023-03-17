import React from 'react';
import "./Experience.css"
const Experience = () => {
    return (
			<div>
				<h4 className="experience_heading">
					Get ready for 5-star Experiences with us
				</h4>
				<div className="review_slider">
					<a
						href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TE_Pzc0qsbAwYLRSNagwtjRITjVONbI0TDNJMU9JszKoMDVLMgYKpRkYGKWmJCUbeXGUJ-alpBbl5wEAV6UTSw&amp;q=wanderon"
						target="_blank"
						rel="noreferrer">
						<div className="review_div">
							<img
								src="https://www.wanderon.in/svg/google-review.svg"
								alt=""
								className="h-[4.1vw]"
							/>
							<div className="start_review">
								<img src="https://www.wanderon.in/svg/star.svg" alt="" />
								<div className="">4.9</div>
							</div>
							<div className="review_text">(6061 reviews)</div>
						</div>
					</a>
					<a
						href="https://www.tripadvisor.in/Attraction_Review-g304551-d15013133-Reviews-WanderOn-New_Delhi_National_Capital_Territory_of_Delhi.html"
						target="_blank"
						rel="noreferrer">
						<div className="review_div">
							<img
								src="https://www.wanderon.in/svg/tripadvisor-review.svg"
								alt=""
								className="h-[4.1vw]"
							/>
							<div className="start_review">
								<img src="https://www.wanderon.in/svg/star.svg" alt="" />
								<div className="">5</div>
							</div>
							<div className="review_text">(1922 reviews)</div>
						</div>
					</a>
					<a
						href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TE_Pzc0qsbAwYLRSNagwtjRITjVONbI0TDNJMU9JszKoMDVLMgYKpRkYGKWmJCUbeXGUJ-alpBbl5wEAV6UTSw&amp;q=wanderon"
						target="_blank"
						rel="noreferrer">
						<div className="review_div">
							<img
								src="https://www.wanderon.in/svg/facebook-review.svg"
								alt=""
								className="h-[4.1vw]"
							/>
							<div className="start_review">
								<img src="https://www.wanderon.in/svg/star.svg" alt="" />
								<div className="">4.9</div>
							</div>
							<div className="review_text">(645 reviews)</div>
						</div>
					</a>
				</div>
			</div>
		);
};

export default Experience;