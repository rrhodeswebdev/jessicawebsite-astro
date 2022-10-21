interface IFullScreenHeroProps {
	image: string;
	altText: string;
}

const FullScreenHero = ({ image, altText }: IFullScreenHeroProps) => {
	return (
		<div className="mb-16 relative w-full sm:h-96 lg:h-fs">
			<img
				src={image}
				alt={altText}
				className="max-h-full w-full object-cover"
			/>
		</div>
	);
};

export default FullScreenHero;
