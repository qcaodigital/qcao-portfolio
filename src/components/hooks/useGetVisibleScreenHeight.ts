import { useState, useEffect } from 'react';

//Hook that detects the screen's true height and updates a returned state that retains that value in pixels
//To need this is a non-issue in desktop/laptop browsing but is a must for mobile web-browsing
//In mobile browsers, the address bar usually is not calculated into "100vh" and thus causes undesired behavior
export const useGetVisibleScreenHeight = (): number => {
	const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

	useEffect(() => {
		const handleResize = () => setScreenHeight(window.innerHeight);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return screenHeight;
};
