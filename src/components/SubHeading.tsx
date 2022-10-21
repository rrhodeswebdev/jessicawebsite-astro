interface ISubHeadingProps {
	title: string;
}

const SubHeading = ({ title }: ISubHeadingProps) => {
	return (
		<div className="border-b border-shade w-5/6 mb-4">
			<h3 className="font-light text-xl pb-2">{title}</h3>
		</div>
	);
};

export default SubHeading;
