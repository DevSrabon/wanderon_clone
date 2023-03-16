
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TripCard.css"
const TripCard = ({ data }) => {
	const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
		<img
			src={LeftArrow}
			alt="prevArrow"
			{...props}
			className={
				"p-3 md:p-5 shadow-lg rounded-full absolute -left-[7vw] md:-left-[3.5vw] top-[40%] hover:scale-125"
			}
		/>
	);
	const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
		<img
			src={RightArrow}
			alt="nextArrow"
			{...props}
			className={
				"p-3 md:p-5 shadow-lg rounded-full absolute -right-[8vw] md:-right-[4.5vw] top-[40%] hover:scale-125"
			}
		/>
	);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
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
        <div className="trip_card_container">

		<Slider {...settings}>
			{data?.map((item) => (
				<div className="trip_card">
					<div
						className="trip_card-div"
						style={{
							backgroundImage: `linear-gradient(to top, rgb(58, 58, 58) 0%, rgba(58, 58, 58, 0.5) 15%, rgba(58, 58, 58, 0) 25%, rgba(58, 58, 58, 0) 100%), url(${item.url})`,
						}}>
							<div className="trip_card_top">
								{item.title}
							</div>
						
					</div>
				</div>
			))}
		</Slider>
        </div>
	);
};
export default TripCard;
