import styles from './Who.module.scss';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';
import SymbolGen from '../../../components/animation/SymbolGen';

export default function Who() {
	const [contentInView, setContentInView] = useState<boolean>(false);

	return (
		<InView
			as='div'
			onChange={(inView: boolean): void => setContentInView(inView)}
			triggerOnce={true}
			className={styles.who}
			data-in-view={contentInView ? true : false}
		>
			<div className={styles.text}>
				<SymbolGen trigger='inView'>
					<h4>Quan Cao</h4>
				</SymbolGen>
				<p data-in-view={contentInView ? 'true' : 'false'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius quod
					sapiente, molestias vitae voluptate minus doloribus suscipit atque maiores
					dolorem laboriosam, mollitia repellendus libero officiis cupiditate eveniet
					quisquam. Ea blanditiis non unde molestias et. Debitis dolorum similique,
					mollitia delectus quidem iusto ea laborum, quasi sapiente error eius? Maxime,
					voluptate?
				</p>
				<p data-in-view={contentInView ? 'true' : 'false'}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius quod
					sapiente, molestias vitae voluptate minus doloribus suscipit atque maiores
					dolorem laboriosam, mollitia repellendus libero officiis cupiditate eveniet
					quisquam. Ea blanditiis non unde molestias et. Debitis dolorum similique,
					mollitia delectus quidem iusto ea laborum, quasi sapiente error eius? Maxime,
					voluptate?
				</p>
			</div>
			<img src='/imgs/portrait-desat.jpg' alt='' />
		</InView>
	);
}
