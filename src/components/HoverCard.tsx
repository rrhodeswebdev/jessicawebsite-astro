interface IHoverCardProps {
	key: number;
	image: string;
	slug: string;
	buttonText: string;
	title: string;
	externalLink: boolean;
	includeBotBorder?: boolean;
}

const HoverCard = (props: IHoverCardProps) => {
	const { image, slug, buttonText, title, externalLink, includeBotBorder = true } = props;

	return (
		<div className="mb-8">
			<div className="text-center mb-8">
				<h2 className="text-2xl font-light mb-1">{title}</h2>
				{includeBotBorder && <div className="border-b border-shade" />}
			</div>
			<div className="group relative flex place-items-center overflow-hidden max-w-sm mb-16m">
				<img
					src={image}
					className="object-cover ease-in-out duration-500"
				/>
				<div className="bg-secondary opacity-60 sm:opacity-0 absolute w-full h-full transition-opacity duration-500 sm:group-hover:opacity-60" />
				<div className="w-full absolute p-8 opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
					{externalLink ? (
						<a href={slug} target="_blank" rel="noreferrer">
							<button className="w-full cursor-pointer border border-white p-4 text-secondary bg-lightWhite opacity-100 sm:group-hover:opacity-100 uppercase sm:opacity-0 transition-opacity">
								{buttonText}
							</button>
						</a>
					) : (
						<a href={`/${slug}`}>
							<button className="w-full cursor-pointer border border-white p-4 text-secondary bg-lightWhite opacity-100 sm:group-hover:opacity-100 uppercase sm:opacity-0 transition-opacity">
								{buttonText}
							</button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default HoverCard;
