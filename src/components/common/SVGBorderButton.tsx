interface SVGBorderButtonProps {
	text: string;
}

export default function SVGBorderButton({ text }: SVGBorderButtonProps) {
	return (
		<button>
			<svg>
				<polyline></polyline>
				<p></p>
			</svg>
		</button>
	);
}
