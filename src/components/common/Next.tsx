import { useHistory } from 'react-router-dom';
import styles from './Next.module.scss';
import { scrollToCallback } from './../../helpers/scrollToCallback';
import { Dispatch, SetStateAction } from 'react';

interface NextProps {
	buttonText: string;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	pushTo: string;
	setDirection: Dispatch<SetStateAction<'up' | 'down'>>;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Next({
	sectionRef: ref,
	buttonText,
	pushTo,
	setDirection,
	setIsSubpathOpen,
}: NextProps) {
	const history = useHistory();

	function handleClick(): void {
		scrollToCallback(ref.current, { top: 0, behavior: 'smooth' }, () => {
			setDirection('down');
			setIsSubpathOpen(false);
			setTimeout(() => {
				history.push(pushTo);
			}, 1000);
		});
	}

	return (
		<button className={styles.Next} onClick={handleClick}>
			{buttonText}
		</button>
	);
}
