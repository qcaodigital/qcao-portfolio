import { navLinksType, navLinkType } from '../../types';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const navLinksDefault: navLinksType = [
	{ pathname: '/', label: 'home', isActive: false },
	{ pathname: '/about', label: 'about me', isActive: false },
	{ pathname: '/work', label: 'my work', isActive: false },
	{ pathname: '/contact', label: 'contact', isActive: false },
	{ pathname: '/blog', label: 'blog', isActive: false },
];

export default function useNavState() {
	const [navLinks, setNavLinks] = useState<navLinksType>(navLinksDefault);
	const location = useLocation();

	useEffect(() => {
		const navLinksCopy = navLinks;
		navLinksCopy.forEach((link: navLinkType): void => {
			if (link.pathname === location.pathname) {
				link.isActive = true;
			} else {
				link.isActive = false;
			}
		});

		setNavLinks(navLinksCopy);
	}, [location.pathname, navLinks]);

	return navLinks;
}
