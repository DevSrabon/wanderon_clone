
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestoCards.css";
const TestoCards = () => {

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
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
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
		<div className="w-3/4 mx-auto">
			<Slider {...settings}>
				<div className="item_card">
					<iframe
						width="960"
						height="415"
						src="https://www.youtube.com/embed/BagUzmZTJ58"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						className="rounded-xl w-56 md:w-full"
						allowfullscreen></iframe>
				</div>
				<div className="item_card">
					<iframe
						width="960"
						height="415"
						src="https://www.youtube.com/embed/LFUkjtpxymU"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						className="rounded-xl w-56 md:w-full"
						allowfullscreen></iframe>
				</div>
			</Slider>
		</div>
	);
};
export default TestoCards;
