import type { FC } from "react";

interface IAccountBioCardProps {
	name: string;
	image: string;
	title: string;
	slug: string;
}

const AccountBioCard: FC<IAccountBioCardProps> = ({
	name,
	image,
	title,
	slug,
}) => {
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
				<div className="bg-secondary opacity-0 absolute w-full h-full transition-opacity duration-500 group-hover:opacity-80" />
				<div className="w-full absolute p-8 group-hover:opacity-100 opacity-0 transition-opacity">
					<a href={`/about/${slug}`}>
						<button className="w-full cursor-pointer border border-white p-4 text-secondary bg-lightWhite group-hover:opacity-100 uppercase opacity-0 transition-opacity">
							{`Meet ${name}`}
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default AccountBioCard;
