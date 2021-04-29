import { useState, useEffect, useCallback } from 'react';

//**Not in use **//
//Receives a scroll target and vertical thresholds
//If the target is scroll passed the threshold numbers then this function returns true, vice versa
//Useful for fading in/out content if its too low/high on the screen
export default function useCheckThreshold(
	scrollTarget: any,
	ref: any,
	sideAndThres: {
		topIsBelow: number | null;
		bottomIsAbove: number | null;
	}
): boolean {
	const [pastThres, setPastThres] = useState<boolean>(false);

	sideAndThres.topIsBelow = sideAndThres.topIsBelow === null ? 1 : sideAndThres.topIsBelow;
	sideAndThres.bottomIsAbove =
		sideAndThres.bottomIsAbove === null ? 1 : sideAndThres.bottomIsAbove;

	const checkThreshold = useCallback<() => void>((): void => {
		if (ref && sideAndThres.topIsBelow && sideAndThres.bottomIsAbove) {
			if (
				window.innerHeight * sideAndThres.bottomIsAbove >
					ref.getBoundingClientRect().bottom ||
				window.innerHeight * sideAndThres.topIsBelow < ref.getBoundingClientRect().top
			) {
				setPastThres(true);
			} else {
				setPastThres(false);
			}
		}
	}, [ref, sideAndThres]);

	useEffect((): (() => void) | void => {
		if (scrollTarget) {
			scrollTarget.addEventListener('scroll', checkThreshold);
			return () => scrollTarget.removeEventListener('scroll', checkThreshold);
		}
	}, [checkThreshold, scrollTarget]);

	return pastThres;
}
