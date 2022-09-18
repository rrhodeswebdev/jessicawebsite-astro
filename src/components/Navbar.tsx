import { useState } from "react";
import type { FC } from "react";
import { HiOutlineMenu as MenuIcon } from "react-icons/hi/index";
import { Transition } from "@headlessui/react";

interface INavbarProps {
	urlPath: string;
}

interface IActiveLinkProps {
	children: React.ReactNode;
	href: string;
	urlPath: string;
}

const ActiveLink: FC<IActiveLinkProps> = ({ children, href, urlPath }) => {
	return (
		<a
			href={href}
			className={`md:ml-6 block py-4 hover:text-secondary lg:hover:border-b lg:hover:border-b-secondary transition-colors font-light ${
				urlPath === href
					? "text-secondary lg:border-b lg:border-b-secondary"
					: "text-primary"
			}`}
		>
			{children}
		</a>
	);
};

const Navbar: FC<INavbarProps> = ({ urlPath }) => {
	const [mobileToggle, setMobileToggle] = useState(false);

	const onMobileMenuClick = () => {
		setMobileToggle(!mobileToggle);
	};

	return (
		<header className="relative px-12 py-4">
			<nav className="mx-auto">
				<div className="flex justify-between items-center">
					<a href="/" className="w-48">
						<img src="/main-logo.png" />
					</a>
					<div className="lg:flex items-center hidden">
						<ActiveLink urlPath={urlPath} href="/">
							Home
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/about">
							Babes
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/services">
							Services
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/new-clients">
							New Clients
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/education">
							Education
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/contact">
							Contact
						</ActiveLink>
					</div>
					<button
						className="lg:hidden focus:outline-none"
						onClick={onMobileMenuClick}
					>
						<MenuIcon className="text-3xl" />
					</button>
				</div>
				<Transition show={mobileToggle}>
					<div
						className={`${
							mobileToggle ? "block" : "hidden"
						} absolute items-center lg:hidden w-screen left-0 z-20 bg-lightWhite text-center mt-4 p-6`}
						onClick={onMobileMenuClick}
					>
						<ActiveLink urlPath={urlPath} href="/">
							Home
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/about">
							Babes
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/services">
							Services
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/new-clients">
							New Clients
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/education">
							Education
						</ActiveLink>
						<ActiveLink urlPath={urlPath} href="/contact">
							Contact
						</ActiveLink>
					</div>
				</Transition>
			</nav>
		</header>
	);
};

export default Navbar;
