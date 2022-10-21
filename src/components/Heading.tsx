interface IHeadingProps {
	title: string;
	subHeading?: string;
}

const Heading = ({ title, subHeading }: IHeadingProps) => {
	return (
		<div className="text-center border-b border-shade my-8">
			<h1 className="text-4xl lg:text-5xl pb-4 font-light">{title}</h1>
			{subHeading && (
				<h3 className="text-lg pb-4 font-light">{subHeading}</h3>
			)}
		</div>
	);
};

export default Heading;
