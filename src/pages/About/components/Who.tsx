import styles from './Who.module.scss';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';
import TypeWriter from '../../../components/animation/TypeWriter';

export default function Who() {
	const [contentInView, setContentInView] = useState<boolean>(false);

	return (
		<InView
			as='div'
			onChange={(inView: boolean): void => setContentInView(inView)}
			triggerOnce={true}
			className={styles.who}
			data-in-view={contentInView}
		>
			<div className={styles.text}>
				<TypeWriter trigger='inView'>
					<h4>Quan Cao</h4>
				</TypeWriter>
				<p data-in-view={contentInView}>
					And yep. You read that correctly. A restaurant manager pivoting into coding?
					Funny how life works right? I'll tell you how it does make sense though.
				</p>
				<p data-in-view={contentInView}>
					I spent nine years of my life thinking that my passion and dedication for my
					job(s) in hospitality management came from my love for food, drink, the dining
					experience, et all. And, while I truly do have a passion for all the above, at
					the end of those nine years I realized my endurance for the grueling nature of
					the hospitality industry didn't come from those passions. It actually came from
					my love for problem solving in that environment.
				</p>
				<p data-in-view={contentInView}>
					Long story short, after a decision to leave the industry for good for various
					reasons and many conversations with people from various work fields, I was led
					to dabble in code due to this newly-realized love for problem solving. Two years
					since that decision here I am now, a self-taught developer, and I want to show
					you what I've become.
				</p>
			</div>
			<img src='/imgs/portrait-desat.jpg' alt='' />
		</InView>
	);
}
