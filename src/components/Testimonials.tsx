import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

interface ITestimonialsProps {
	testimonials: {
		testimonial: string;
		_id: string;
	}[];
}

const Testimonials = ({ testimonials }: ITestimonialsProps) => {
	const settings = {
		dots: false,
		infinite: true,
		adaptiveHeight: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	return (
		<>
			<div className="p-8 mb-16 max-w-6xl mx-auto bg-lightWhite">
				<Slider {...settings}>
					{testimonials.map((testimonial) => (
						<div
							className="text-center font-light text-lg italic"
							key={testimonial._id}
						>
							&quot;{testimonial.testimonial}&quot;
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

export default Testimonials;
