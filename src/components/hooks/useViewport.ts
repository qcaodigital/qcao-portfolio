import { useState, useEffect } from 'react';

export interface viewportSize {
	label: string;
	minWidth: number;
	maxWidth: number;
	rank: number;
}

export interface viewports {
	[key: string]: viewportSize;
	xs: viewportSize;
	sm: viewportSize;
	md: viewportSize;
	lg: viewportSize;
	xl: viewportSize;
	xxl: viewportSize;
}

export const allViewports: viewports = {
	xs: {
		label: 'xs',
		minWidth: 0,
		maxWidth: 549,
		rank: 1,
	},
	sm: {
		label: 'sm',
		minWidth: 550,
		maxWidth: 724,
		rank: 2,
	},
	md: {
		label: 'md',
		minWidth: 725,
		maxWidth: 989,
		rank: 3,
	},
	lg: {
		label: 'lg',
		minWidth: 990,
		maxWidth: 1249,
		rank: 4,
	},
	xl: {
		label: 'xl',
		minWidth: 1250,
		maxWidth: 1619,
		rank: 5,
	},
	xxl: {
		label: 'xxl',
		minWidth: 1620,
		maxWidth: Infinity,
		rank: 6,
	},
};

export default function useViewport(): viewportSize {
	let initialViewportSize: viewportSize =
		window.innerWidth < allViewports.xs.maxWidth
			? allViewports.xs
			: window.innerWidth < allViewports.sm.maxWidth
			? allViewports.sm
			: window.innerWidth < allViewports.md.maxWidth
			? allViewports.md
			: window.innerWidth < allViewports.lg.maxWidth
			? allViewports.lg
			: window.innerWidth < allViewports.xl.maxWidth
			? allViewports.xl
			: allViewports.xxl;
	var [viewport, setViewport] = useState<viewportSize>(initialViewportSize);

	function handleResize(): void {
		Object.keys(allViewports).forEach((size: string): void => {
			if (
				allViewports[size].minWidth < window.innerWidth &&
				window.innerWidth < allViewports[size].maxWidth
			) {
				setViewport(allViewports[size]);
			}
		});
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return viewport;
}
