import type { FC } from "react";

interface IButtonProps {
	children: React.ReactNode;
	href: string;
	outlineVariant?: boolean;
	external?: boolean;
}

const Button: React.FC<IButtonProps> = ({
	children,
	href,
	outlineVariant,
	external,
}) => {
	return (
		<a
			target={external ? "_blank" : "_self"}
			href={href}
			rel="noreferrer"
			className={`p-4 mb-8 w-72 ${
				outlineVariant
					? "text-accent border border-accent hover:bg-accent hover:text-white"
					: "text-white bg-primary hover:bg-accent md:w-52 mx-8"
			} transition-colors text-center font-light lg:flex-nowrap`}
		>
			{children}
		</a>
	);
};

export default Button;
