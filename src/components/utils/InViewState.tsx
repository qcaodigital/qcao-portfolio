import { InView } from 'react-intersection-observer';

export default function InViewState(props: any) {
	if (!props.stateSetter) {
		throw new Error(
			'The prop "stateSetter" was not provided in the component InViewState and is required.'
		);
	} else if (!props.as) {
		throw new Error(
			'The prop "as" was not provided in the component InViewState and is required.'
		);
	}

	const { stateSetter } = props;
	const elementProps = () => {
		const { stateSetter: alias, ...rest } = props;
		return rest;
	};

	return (
		<InView {...elementProps()} onChange={(inView) => stateSetter(inView)}>
			<>{props.children}</>
		</InView>
	);
}
