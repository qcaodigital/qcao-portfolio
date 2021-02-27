import styles from './SVGBorderButton.module.scss';
import { useState, useRef, CSSProperties } from 'react';
import { useEffect } from 'react';

interface SVGBorderButtonProps {
	text: string;
	animate?: boolean;
	strokeColor?: string;
}

interface buttonDimensionsType {
	height: number;
	width: number;
}

interface customCSSProps extends CSSProperties {
	'--pathLength': number;
	'--pathWidth': number;
	'--pathHeight': number;
}

const pathDistanceFromButton = 10;

function generatePolylinePoints(width: number, height: number, diff: number): string {
	const offset = diff - 1;
	return `${width + offset},1 ${width + offset},${height + offset} 1,${height + offset} 1,1 ${
		width + offset
	}, 1`;
}

export default function SVGBorderButton({
	text,
	animate = true,
	strokeColor = 'black',
}: SVGBorderButtonProps) {
	const [buttonDimensions, setButtonDimensions] = useState<buttonDimensionsType>({
		width: 0,
		height: 0,
	});
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		function handleButtonDimChange() {
			const buttonDim = { height: 0, width: 0 };
			buttonDim.height = buttonRef.current!.offsetHeight;
			buttonDim.width = buttonRef.current!.offsetWidth;
			setButtonDimensions(buttonDim);
		}
		if (buttonRef !== null) {
			handleButtonDimChange();
		}
		window.addEventListener('resize', handleButtonDimChange);
		return () => window.removeEventListener('resize', handleButtonDimChange);
	}, []);

	const pathRef = useRef<SVGPolylineElement | null>(null);
	const [pathLength, setPathLength] = useState<number>(0);
	useEffect(() => {
		setPathLength(pathRef.current!.getTotalLength());
	}, [buttonDimensions]);

	return (
		<button key={pathLength} ref={buttonRef} className={styles.SVGBorderButton}>
			<svg
				height={buttonDimensions.height + pathDistanceFromButton}
				width={buttonDimensions.width + pathDistanceFromButton}
				style={
					{
						'--pathLength': pathLength,
						'--pathHeight': buttonDimensions.height,
						'--pathWidth': buttonDimensions.width,
					} as customCSSProps
				}
			>
				<polyline
					ref={pathRef}
					style={{
						stroke: animate ? strokeColor : 'transparent',
					}}
					strokeWidth='1.5'
					points={generatePolylinePoints(
						buttonDimensions.width,
						buttonDimensions.height,
						pathDistanceFromButton
					)}
				></polyline>
			</svg>
			<p>{text}</p>
		</button>
	);
}
