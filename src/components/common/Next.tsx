import { useHistory } from 'react-router-dom';
import { scrollToCallback } from './../../helpers/scrollToCallback';
import { Dispatch, SetStateAction } from 'react';
import SVGBorderButton from './SVGBorderButton';

interface NextProps {
	className?: string;
	text?: string;
	buttonText: string;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	pushTo: string;
	setDirection: Dispatch<SetStateAction<string>>;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Next({
	className,
	sectionRef: ref,
	text,
	buttonText,
	pushTo,
	setDirection,
	setIsSubpathOpen,
}: NextProps) {
	const history = useHistory();

	function handleClick(): void {
		scrollToCallback(ref.current, { top: 0, behavior: 'smooth' }, () => {
			setDirection('down');
			setTimeout(() => {
				setIsSubpathOpen(false);
			}, 100);
			setTimeout(() => {
				history.push(pushTo);
			}, 1000);
		});
	}

	return (
		<div style={{ textAlign: 'center', margin: '5vh 0' }} className={className}>
			<p style={{ marginBottom: '1rem', fontSize: '1.6rem', fontWeight: 500 }}>{text}</p>
			<SVGBorderButton onClick={handleClick} text={buttonText} />
		</div>
	);
}
