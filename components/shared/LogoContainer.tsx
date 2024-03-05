import Image from "next/image";

export interface LogoContainerProps {
	className?: string;
	iconClassName?: string;
	logoWidth?: number;
	fileName: string;
}

export default function LogoContainer({
	className,
	iconClassName,
	logoWidth = 132,
	fileName,
}: LogoContainerProps) {
	const logoHeight = (logoWidth * 65) / 425;
	const iconPath = `/icons/${fileName}`;

	return (
		<div className={className}>
			<Image
				src={iconPath}
				height={logoHeight}
				width={logoWidth}
				className={iconClassName}
				alt="zoan-logo"
			/>
		</div>
	);
}
