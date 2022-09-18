import type { FC } from "react";

interface IFullScreenHeroProps {
	image: string;
	altText: string;
}

const FullScreenHero: FC<IFullScreenHeroProps> = ({ image, altText }) => {
	return (
		<div className="mb-16 relative w-full h-96 lg:h-fs object-fill">
			<img src={image} alt={altText} />
		</div>
	);
};

export default FullScreenHero;
