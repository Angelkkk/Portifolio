import Particles from "../components/particles";

export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl  from-[#0D1B2A] via-[#1B263B]/45 to-[#0D1B2A]">
			<Particles
          className="absolute inset-0 -z-50" 
          quantity={1000}
        />
			{children}
		</div>
	);
}
