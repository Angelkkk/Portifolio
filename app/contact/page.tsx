"use client";
import { Phone, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";

const socials = [
	{
		icon: <Instagram size={20} />,
		href: "https://www.instagram.com/farsax_design?igsh=OHBjaDVkaXQ3NjNo",
		label: "Instagram",
		handle: "@farsax_design",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:farsaxdesign@gmail.com",
		label: "Email",
		handle: "farsaxdesign@gmail.com",
	},
	{
		icon: <Phone size={20} />,
		href: "https://contate.me/httpswameqrq3kixzlc62fed1",
		label: "Whatsapp",
		handle: "+55 64 9265-3887",
	},
];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-[#0D1B2A] via-[#1B263B]/45 to-[#0D1B2A]">
			<Navigation />
			<Particles
				className="absolute inset-0 -z-50" 
				quantity={1000}
			/>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-xl text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
