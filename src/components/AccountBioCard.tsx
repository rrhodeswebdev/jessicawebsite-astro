interface IAccountBioCardProps {
	key: number;
	name: string;
	image: string;
	title: string;
	slug: string;
}

const AccountBioCard = ({
	name,
	image,
	title,
	slug,
}: IAccountBioCardProps) => {
	return (
		<div>
			<div className="text-center mb-2">
				<h2 className="text-xl font-light mb-1">{name}</h2>
				<h3 className="text-md font-light mb-4">{title}</h3>
				<div className="border-b border-shade mb-4" />
			</div>
			<div className="group relative flex place-items-center overflow-hidden mb-16">
				<img
					src={image}
					className="object-cover ease-in-out duration-500"
				/>
				<div className="bg-secondary opacity-60 sm:opacity-0 absolute w-full h-full transition-opacity duration-500 sm:group-hover:opacity-60" />
				<div className="w-full absolute p-8 opacity-100 sm:group-hover:opacity-100 sm:opacity-0 transition-opacity">
					<a href={`/about/${slug}`}>
						<button className="w-full cursor-pointer border border-white p-4 text-secondary bg-lightWhite opacity-100 sm:group-hover:opacity-100 uppercase sm:opacity-0 transition-opacity">
							{`Meet ${name}`}
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default AccountBioCard;
