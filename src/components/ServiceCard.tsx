import Button from "./Button";

interface IServiceCardProps {
	service: {
		title: string;
		img: string;
		imgAlt: string;
		url: string;
	};
}

const ServiceCard = ({ service }: IServiceCardProps) => {
	return (
		<div className="m-6 p-6 w-80">
			<h2 className="text-4xl text-center m-4 p-4 tracking-wide font-light">
				{service.title}
			</h2>
			<div className="relative mb-12">
				<img
					src={service.img}
					alt={service.imgAlt}
					className="relative z-10"
				/>
				<div className="border-2 border-secondary absolute top-4 left-4 h-full w-full" />
			</div>
			<div className="flex justify-center">
				<Button href={service.url} outlineVariant>
					See Pricing
				</Button>
			</div>
		</div>
	);
};

export default ServiceCard;
