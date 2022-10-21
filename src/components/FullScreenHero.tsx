import type { FC } from "react";

interface IFullScreenHeroProps {
	image: string;
	altText: string;
}

const FullScreenHero: FC<IFullScreenHeroProps> = ({ image, altText }) => {
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
