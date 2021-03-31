import { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import useViewport, { viewportType } from './useViewport';
import useNavState from './useNavState';
import { useGetVisibleScreenHeight } from './useGetVisibleScreenHeight';
import useWheelSwipe from './useWheelSwipe';
import { navLinksType } from '../../types';

interface state {
	isHBMOpen: boolean;
	setIsHBMOpen: Dispatch<SetStateAction<boolean>>;
	viewport: viewportType;
	screenHeight: string | number;
	direction: string;
	setDirection: Dispatch<SetStateAction<string>>;
	currentPathIdx: number;
	setCurrentPathIdx: Dispatch<SetStateAction<number>>;
	navLinks: navLinksType;
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
}

export function useManageState(): state {
	const location = useLocation();
	const [isHBMOpen, setIsHBMOpen] = useState<boolean>(false);
	const viewport: viewportType = useViewport();
	const navLinks = useNavState();
	const indexOfCurrentPath = useCallback(
		(): number => navLinks.indexOf(navLinks.filter((link) => link.isActive)[0]),
		[navLinks]
	);
	const [currentPathIdx, setCurrentPathIdx] = useState<number>(indexOfCurrentPath);
	const [screenHeight] = useGetVisibleScreenHeight();
	const [isSubpathOpen, setIsSubpathOpen] = useState<boolean>(false);
	const [direction, setDirection] = useWheelSwipe(
		navLinks,
		currentPathIdx,
		setCurrentPathIdx,
		isSubpathOpen
	);

	useEffect(() => {
		setIsSubpathOpen(false);
		setCurrentPathIdx(indexOfCurrentPath);
	}, [location.pathname, navLinks, indexOfCurrentPath]);

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return {
		isHBMOpen,
		setIsHBMOpen,
		viewport,
		screenHeight,
		direction,
		setDirection,
		currentPathIdx,
		setCurrentPathIdx,
		navLinks,
		isSubpathOpen,
		setIsSubpathOpen,
	};
}
