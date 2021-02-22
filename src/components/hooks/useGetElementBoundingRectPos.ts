import { useState, useEffect } from 'react';

export default function useGetElementBoundingRectPos(
	scrollTarget: any,
	ref: any,
	sideAndThres: {
		top: number;
		bottom: number;
	}
): boolean {
	const [pastThres, setPastThres] = useState<boolean>(false);

	function checkThreshold(): void {
		if (ref && sideAndThres.top && sideAndThres.bottom) {
			if (
				window.innerHeight * sideAndThres.bottom > ref.getBoundingClientRect().bottom ||
				window.innerHeight * sideAndThres.top < ref.getBoundingClientRect().top
			) {
				setPastThres(true);
			} else {
				setPastThres(false);
			}
		}
	}

	useEffect((): (() => void) | void => {
		if (scrollTarget) {
			scrollTarget.addEventListener('scroll', checkThreshold);
			return () => scrollTarget.removeEventListener('scroll', checkThreshold);
		}
	}, [checkThreshold, scrollTarget]);

	return pastThres;
}
