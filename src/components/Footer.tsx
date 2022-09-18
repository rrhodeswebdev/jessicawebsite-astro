import type { FC } from "react";
import {
	FaFacebookSquare,
	FaInstagram,
	FaYelp,
	FaGoogle,
} from "react-icons/fa";

const Footer: FC = () => {
	return (
		<footer className="container mx-auto p-8">
			<div className="flex justify-center content-center mb-4">
				<a
					href="https://facebook.com/jessegracedstudio"
					target="_blank"
					rel="noreferrer"
				>
					<FaFacebookSquare className="text-2xl mx-4 my-2 cursor-pointer text-primary hover:text-accent transition-colors" />
				</a>
				<a
					href="https://www.instagram.com/graced_studio/"
					target="_blank"
					rel="noreferrer"
				>
					<FaInstagram className="text-2xl mx-4 my-2 cursor-pointer text-primary hover:text-accent transition-colors" />
				</a>
				<a
					href="https://g.page/r/CZEWWt74Cb8hEAE"
					target="_blank"
					rel="noreferrer"
				>
					<FaGoogle className="text-2xl mx-4 my-2 cursor-pointer text-primary hover:text-accent transition-colors" />
				</a>
				<a
					href="https://www.yelp.com/biz/graced-studio-concord?osq=graced+studio"
					target="_blank"
					rel="noreferrer"
				>
					<FaYelp className="text-2xl mx-4 my-2 cursor-pointer text-primary hover:text-accent transition-colors" />
				</a>
			</div>
			<div className="flex justify-center content-center">
				<span className="text-xs text-primary">
					Copyright &copy; {new Date().getFullYear()} | Made with ❤️
					by{" "}
					<a
						href="https://ryanrhodes.io"
						target="_blank"
						rel="noreferrer"
						className="hover:text-accent"
					>
						Ryan Rhodes
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
