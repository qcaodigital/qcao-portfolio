import { useHistory } from 'react-router-dom';
interface LinkProps {
	to: string;
	callBefore?: () => void;
	callAfter?: () => void;
	children?: React.ReactChild;
}

export default function Link({ to, callBefore, callAfter, children }: LinkProps) {
	const history = useHistory();
	function handleClick(): void {
		if (callBefore) {
			callBefore();
		}
		setTimeout(() => {
			history.push(to);
			if (callAfter) {
				callAfter();
			}
		}, 0);
	}
	//eslint-disable-next-line
	return <a onClick={handleClick}>{children}</a>;
}
