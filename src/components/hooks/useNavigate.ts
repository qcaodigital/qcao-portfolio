import { useCallback, useEffect, useState, Dispatch, SetStateAction, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { navLinksType } from '../../types';

//This hook is the bread and butter of the entire website and it's unique navigation system
//The hook returns state and a statesetter that determines what direction to animate elements in based on numerous factors
//The direction can be determined by calculating the next page to navigate to's index being higher or lower than the current page (determined by an array of paths that determine order)
export default function useNavigate(
	navLinks: navLinksType,
	currentPathIdx: number,
	setCurrentPathIdx: Dispatch<SetStateAction<number>>,
	isSubpathOpen: boolean
): [string, Dispatch<SetStateAction<string>>] {
	const [direction, setDirection] = useState<string>('up');
	const onCoolDown = useRef<boolean | null>(false);
	const history = useHistory();

	//Handle navigation on touch swipe or mouse scroll
	const setDirAndPush = useCallback(
		//Delta determines the direction to scroll
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
				//onCoolDown bottlenecks a scroll wheel from being able to fire multiple times in the same scroll
				onCoolDown!.current = true;
				setTimeout(() => (onCoolDown!.current = false), 750);
			}
		},
		[navLinks, history, currentPathIdx, onCoolDown, setCurrentPathIdx, isSubpathOpen]
	);

	//On scroll
	const handleWheel = useCallback(
		(e: WheelEvent): void => {
			if (!e.ctrlKey) {
				setDirAndPush(e.deltaY);
			}
		},
		[setDirAndPush]
	);

	//On swipe
	const handleSwipe = useCallback(
		(e: TouchEvent): void => {
			let pointerStart: number = e.touches[0].clientY;
			let pointerEnd: number;
			function swipeUp(e: TouchEvent) {
				let delta: number | undefined;
				pointerEnd = e.changedTouches[0].clientY;
				delta = pointerStart - pointerEnd;
				window.removeEventListener('touchend', swipeUp);

				if (Math.abs(delta) > 35) setDirAndPush(delta);
			}
			window.addEventListener('touchend', swipeUp);
		},
		[setDirAndPush]
	);

	//On PageUp or PageDown
	const handlePageBtn = useCallback(
		(e: KeyboardEvent) => {
			if (['PageUp', 'ArrowUp'].includes(e.key)) {
				setDirAndPush(-1);
			} else if (['PageDown', 'ArrowDown'].includes(e.key)) {
				setDirAndPush(1);
			}
		},
		[setDirAndPush]
	);

	useEffect(() => {
		window.addEventListener('wheel', handleWheel);
		window.addEventListener('touchstart', handleSwipe);
		window.addEventListener('keyup', handlePageBtn);
		return () => {
			window.removeEventListener('wheel', handleWheel);
			window.removeEventListener('touchstart', handleSwipe);
			window.removeEventListener('keyup', handlePageBtn);
		};
	}, [handleWheel, handleSwipe, handlePageBtn]);

	return [direction, setDirection];
}
