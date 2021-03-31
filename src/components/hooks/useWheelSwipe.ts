import { useCallback, useEffect, useState, Dispatch, SetStateAction, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { navLinksType } from '../../types';

export default function useWheelSwipe(
	navLinks: navLinksType,
	currentPathIdx: number,
	setCurrentPathIdx: Dispatch<SetStateAction<number>>,
	isSubpathOpen: boolean
): [string, Dispatch<SetStateAction<string>>] {
	const [direction, setDirection] = useState<string>('up');
	const onCoolDown = useRef<boolean | null>(false);
	const history = useHistory();

	const setDirAndPush = useCallback(
		(delta: number): void => {
			if (!onCoolDown!.current && !isSubpathOpen) {
				if (delta < 0 && currentPathIdx > 0) {
					setDirection('up');
					history.push(navLinks[currentPathIdx - 1].pathname);
					setCurrentPathIdx((curr: number) => curr - 1);
				} else if (delta > 0 && navLinks[currentPathIdx + 1] !== undefined) {
					setDirection('down');
					history.push(navLinks[currentPathIdx + 1].pathname);
					setCurrentPathIdx((curr: number) => curr + 1);
				}
				onCoolDown!.current = true;
				setTimeout(() => (onCoolDown!.current = false), 750);
			}
		},
		[navLinks, history, currentPathIdx, onCoolDown, setCurrentPathIdx, isSubpathOpen]
	);

	const handleWheel = useCallback(
		(e: WheelEvent): void => {
			if (!e.ctrlKey) {
				setDirAndPush(e.deltaY);
			}
		},
		[setDirAndPush]
	);

	const handleSwipe = useCallback(
		(e: TouchEvent): void => {
			let pointerStart: number = e.touches[0].clientY;
			let pointerEnd: number;
			let delta: number | undefined;
			function swipeUp(e: TouchEvent) {
				pointerEnd = e.changedTouches[0].clientY;
				delta = pointerStart - pointerEnd;
				window.removeEventListener('touchend', swipeUp);
				if (Math.abs(delta) > 35) setDirAndPush(delta);
			}
			window.addEventListener('touchend', swipeUp);
		},
		[setDirAndPush]
	);

	useEffect(() => {
		window.addEventListener('wheel', handleWheel);
		window.addEventListener('touchstart', handleSwipe);
		return () => {
			window.removeEventListener('wheel', handleWheel);
			window.removeEventListener('touchstart', handleSwipe);
		};
	}, [handleWheel, handleSwipe]);

	//NOT NEEDED ANYMORE SINCE WE ARE DEFAULTING DIRECTION TO 'CENTER' ON MOUNT
	//Change direction to center when nav is changed via back or forwards button
	// useEffect(() => {
	// 	function handlePopstate() {
	// 		setDirection('center');
	// 	}

	// 	window.addEventListener('popstate', handlePopstate);
	// 	return () => window.removeEventListener('popstate', handlePopstate);
	// }, []);

	return [direction, setDirection];
}
