import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';

export const useGetVisibleScreenHeight = (): [
	number | string,
	Dispatch<SetStateAction<number | string>>
] => {
	const [screenHeight, setScreenHeight] = useState<number | string>(window.innerHeight);
	const handleResize = useCallback((): void => {
		if (screenHeight !== '100%') {
			setScreenHeight(window.innerHeight);
		}
	}, [screenHeight]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return [screenHeight, setScreenHeight];
};
