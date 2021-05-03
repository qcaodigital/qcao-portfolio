import { useState, useEffect, useCallback } from 'react';

export interface viewportType {
	label: string;
	rank: number;
	minWidth: number;
	maxWidth: number;
}

export interface allViewportsType {
	[key: string]: viewportType;
}

export const allViewports: allViewportsType = {
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

//Returns one of the objects above as state to determine the size of the viewport
//Watches on screen resize
export default function useViewport(): viewportType {
	//Match the current innerWidth to all viewport sizes and returns the object containing the viewport size
	function getViewportSize(): viewportType {
		const viewportWidth: number = window.innerWidth;
		let viewportSize: string = '';

		for (const key in allViewports) {
			if (viewportWidth < allViewports[key].minWidth) {
				viewportSize = key;
				break;
			}
		}

		console.log(viewportSize);
		return allViewports[viewportSize];
	}

	var [viewport, setViewport] = useState<viewportType>(getViewportSize());

	const handleResize = useCallback((): void => {
		setViewport(getViewportSize());
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return viewport;
}
