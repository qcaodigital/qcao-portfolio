import styles from './Sub.module.scss';
import { useState } from 'react';
import InViewState from './../../../components/utils/InViewState';

interface SubProps {
	id: string;
	heading: string;
	children: React.ReactNode;
}

export default function Sub({ id, heading, children }: SubProps) {
	const [headerInView, setHeaderInView] = useState<boolean>(false);

	return (
		<section id={styles[id]} className={styles.Sub}>
			<InViewState as='header' stateSetter={setHeaderInView}>
				<h3 className={styles.subSectionHeader} data-in-view={headerInView}>
					<span className={styles.numberMarker}>0{id}</span>
					{heading}
				</h3>
			</InViewState>
			<div className={styles.content}>{children}</div>
		</section>
	);
}
