import Landing from '../../components/common/Landing';
import { Dispatch, MutableRefObject, SetStateAction, useRef, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import { viewportType } from './../../components/hooks/useViewport';

interface ContactProps {
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: MutableRefObject<HTMLElement | null>;
	viewport: viewportType;
}

export default function Contact({
	isSubpathOpen,
	setIsSubpathOpen,
	sectionRef,
	viewport,
}: ContactProps) {
	const contactFormRef = useRef<HTMLFormElement | null>(null);
	useEffect(() => {
		if (isSubpathOpen) {
			const timeout = setTimeout(
				() => {
					sectionRef.current?.scrollBy({
						top: contactFormRef.current?.getBoundingClientRect().top,
						behavior: 'smooth',
					});

					sectionRef.current?.removeEventListener('scroll', cancelTimeout);
				},
				1500 //time for subpath open animation
			);

			function cancelTimeout() {
				if (timeout) clearTimeout(timeout);
			}

			sectionRef.current?.addEventListener('scroll', cancelTimeout);
		}
	}, [isSubpathOpen, sectionRef]);

	return (
		<>
			<Landing
				viewport={viewport}
				isSubpathOpen={isSubpathOpen}
				setIsSubpathOpen={setIsSubpathOpen}
				sectionRef={sectionRef}
				img={{ src: '/imgs/contact.jpg', alt: '' }}
				headerText='Reach Out'
				subheaderText='Lets create something great together. Shoot me an email at qcao.digital@gmail.com or click the button below to submit a contact form.'
				ctaText='Contact Me'
				whiteImg
				noBoxShadow
			></Landing>
			<ContactForm ref={contactFormRef} />
		</>
	);
}
