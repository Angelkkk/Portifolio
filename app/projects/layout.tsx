export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl  from-[#0D1B2A] via-[#1B263B]/45 to-[#0D1B2A]">
			
			{children}
		</div>
	);
}
