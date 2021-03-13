import { navLinksType, navLinkType } from '../../types';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const navLinksDefault: navLinksType = [
	{ pathname: '/', label: 'home', isActive: false, desc: 'Home' },
	{ pathname: '/about', label: 'about me', isActive: false, desc: 'About' },
	{ pathname: '/work', label: 'my work', isActive: false, desc: 'Work' },
	{ pathname: '/contact', label: 'contact', isActive: false, desc: 'Contact' },
	// { pathname: '/blog', label: 'blog', isActive: false, desc: 'Blog' },
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
