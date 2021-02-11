import { useState, useEffect } from 'react';

export const useGetVisibleScreenHeight = (): string => {
	const [screenHeight, setScreenHeight] = useState<number>(
		window.innerHeight
	);
	const handleResize = (): void => {
		setScreenHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
	}, []);

	return `${screenHeight}px`;
};
