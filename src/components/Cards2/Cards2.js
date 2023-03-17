import "../Cards/Cards.css";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card2 = ({  backpack }) => {
	const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
		<img
			src={LeftArrow}
			alt="prevArrow"
			{...props}
			className={
				"p-3 md:p-5 shadow-lg rounded-full absolute -left-[8vw] md:-left-[3vw] top-[40%] hover:scale-125 "
			}
		/>
	);
	const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
		<img
			src={RightArrow}
			alt="nextArrow"
			{...props}
			className={
				"p-3 md:p-5 shadow-lg rounded-full absolute -right-[8vw] md:-right-[3.5vw] top-[40%] hover:scale-125"
			}
		/>
	);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
				},
			},
		],
	};

	return (
		<div className="carousel">
			<Slider {...settings}>
				{backpack?.map((item) => (
					<div className="card hover:scale-105 duration-200 ease-linear">
						<div className="card-div">
							<div
								style={{
									backgroundImage: `linear-gradient(to top, rgb(58, 58, 58) 0%, rgba(58, 58, 58, 0.5) 15%, rgba(58, 58, 58, 0) 25%, rgba(58, 58, 58, 0) 100%), url(${item.url})`,
								}}>
								<div className="card-top">
									<div className="card-text">
										<img
											src="https://www.wanderon.in/svg/features/camping.svg"
											alt=""
											className="w-6"
										/>
										<div className="">{item.imgTitle1}</div>
									</div>
									<div className="card-text">
										<img
											src="https://www.wanderon.in/svg/features/camping.svg"
											alt=""
											className="w-6"
										/>
										<div className="">{item.imgTitle2}</div>
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="card-bottom">
								<div className="">
									<div className="day-location">
										<img src="https://www.wanderon.in/svg/clock.svg" alt="" />
										{item.day}
									</div>
									<div className="day-location">
										<img src="https://www.wanderon.in/svg/map-pin.svg" alt="" />
										{item.location}
									</div>
								</div>
								<div className="pkgName">{item.pkgName}</div>
								<div className="start">
									<span>Start at</span>
									<div className="">₹{item.price}</div>
								</div>
								<div className="date">
									<img src="https://www.wanderon.in/svg/calendar.svg" alt="" />
									{item.bookDate}
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};
export default Card2;
