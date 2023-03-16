import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SecretCard.css";
const SecretCard = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
			<svg
				{...props}
				viewBox="0 0 32 32"
				aria-hidden="true"
				class="SecretSauce__LeftArrow-fcwgqy-3 bttbMG">
				<path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"></path>
			</svg>
		);
	const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
		<svg
			{...props}
			viewBox="0 0 32 32"
			aria-hidden="true"
			class="SecretSauce__RightArrow-fcwgqy-4 cVVDsC">
			<path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"></path>
		</svg>
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
				<div className="item_card">
					<img
						src="https://www.wanderon.in/offer-page/third-party.svg"
						alt=""
					/>
					<div className="item_heading">No Third Party Mess</div>
					<div className="item_text">
						All the trips at WanderOn are managed end to end by our in-house
						operations team. There are no third parties involved and hence no
						fishy claims. So when we say your travel plan is 100% our
						responsibility, we mean it.
					</div>
				</div>
				<div className="item_card">
					<img
						src="https://www.wanderon.in/offer-page/transparency.svg"
						alt=""
					/>
					<div className="item_heading">Transparency & Security</div>
					<div className="item_text">
						All the Itineraries are backed up by a strong ground team that
						monitors every route and condition real time. This ensures
						transparency and solidifies the security measures for all our
						travelers.
					</div>
				</div>
				<div className="item_card">
					<img
						src="https://www.wanderon.in/offer-page/travel-insurance.svg"
						alt=""
					/>
					<div className="item_heading">Co-travellers Filtering</div>
					<div className="item_text">
						Group trips are fun when you have like-minded fellow travelers. We
						assure that through a well-defined filtering process at all the
						stages, beginning from marketing, sales to operations.
					</div>
				</div>
				<div className="item_card">
					<img src="https://www.wanderon.in/offer-page/one-stop.png" alt="" />
					<div className="item_heading">One stop hassle free experience</div>
					<div className="item_text">
						Our entire team puts rigorous efforts on ground to make sure your
						experience is a top notch one. Awesome stays, friendly drivers,
						hospitable ground staff is ready to make your trip the most
						memorable for lifetime.
					</div>
				</div>
			</Slider>
		</div>
	);
};
export default SecretCard;
