import { useHistory } from 'react-router-dom';
interface LinkProps {
	to: string;
	callBefore?: () => {};
	callAfter?: () => {};
	children: React.ReactChild;
}

export default function Link({ to, callBefore, callAfter, children }: LinkProps) {
	const history = useHistory();
	function handleClick(): void {
		if (callBefore) {
			callBefore();
		}
		setTimeout(() => history.push(to), 0);
		// if (callAfter) {
		// 	setTimeout(() => callAfter(), 500);
		// }
	}
	//eslint-disable-next-line
	return <a onClick={handleClick}>{children}</a>;
}
