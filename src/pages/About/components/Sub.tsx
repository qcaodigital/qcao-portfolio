import styles from './Sub.module.scss';
import { useState } from 'react';
import InViewState from './../../../components/utils/InViewState';
import SlideUp from './../../../components/animation/SlideUp';

interface SubProps {
	id: string;
	heading: string;
	children: React.ReactNode;
	reduceFont?: boolean;
	break?: boolean;
}

export default function Sub({ id, heading, children, reduceFont, break: breakText }: SubProps) {
	const [headerInView, setHeaderInView] = useState<boolean>(false);

	return (
		<section id={styles[id]} className={styles.Sub} data-reduce-font={reduceFont}>
			<InViewState as='header' stateSetter={setHeaderInView} triggerOnce>
				<h3 className={styles.subSectionHeader} data-in-view={headerInView}>
					<span className={styles.numberMarker}>
						0
						<SlideUp trigger={headerInView}>
							<span className='number'>{id}</span>
						</SlideUp>
					</span>
					<p className={styles.mainText}>
						{breakText
							? heading
									.split(' ')
									.map((word) => <span className={styles.mainText}>{word}</span>)
							: heading}
					</p>
				</h3>
			</InViewState>
			<div className={styles.content}>{children}</div>
		</section>
	);
}
