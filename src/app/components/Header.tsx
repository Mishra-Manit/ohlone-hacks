import Image from "next/image";
import StyledLink from "./StyledLink";
import Link from 'next/link';

const navItems = {
	'/register': {
		name: 'REGISTER',
	},
	'/location': {
		name: 'MAP',
	},
};
export default function Header() {
	return (
		<div className="w-full px-10 py-6 border-b shadow-[0_0_15px_0_rgba(0,0,0,0.1)] font-light flex justify-between items-center">
			<Link href="/" target="_self" className="hover:cursor-pointer">
				<Image
					alt="Ohlone Hacks Logo"
					src="/images/OHLONE_HACKS_TRANSPARENT.png"
					className="w-6 select-none invert"
					width={300}
					height={300}
				/>
			</Link>
			<div className="flex gap-5">
				{Object.entries(navItems).map(([path, { name }]) => {
					return (
						<Link key={path} href={path} target={"_self"} className="
						hover:underline
						underline-offset-4
						font-medium
						">{name}</Link>
						// <StyledLink key={path} href={path} target={"_self"} text={name} arrow={false} />
					);
				})}
			</div>
		</div>
	)
}