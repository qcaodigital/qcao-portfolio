import styles from './About.module.scss';
import { Dispatch, SetStateAction } from 'react';
import Sub from './components/Sub';
import Skillset from './components/Skillset';
import Who from './components/Who';
import Resume from './components/Resume';
import Next from '../../components/common/Next';
import Landing from './../../components/common/Landing';

interface AboutProps {
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	setDirection: Dispatch<SetStateAction<'up' | 'down'>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
}

export default function About({
	isSubpathOpen,
	setIsSubpathOpen,
	setDirection,
	sectionRef,
}: AboutProps) {
	console.log(sectionRef);
	return (
		<>
			<Landing
				isSubpathOpen={isSubpathOpen}
				setIsSubpathOpen={setIsSubpathOpen}
				sectionRef={sectionRef}
				headerText='About Me'
				subheaderText='Im a full-stack web developer specializing in the MERN stack. One year ago
                I left my career as an accomplished business manager in the hospitality
						industry to pursue becoming a developer.'
				img={{
					src: '/imgs/portrait-desat.jpg',
					alt: 'Silhouette of Quan Cao',
				}}
			/>
			<Sub id='1' heading='Who I Am'>
				<Who />
			</Sub>
			<Sub id='2' heading='Skillset'>
				<Skillset sectionRef={sectionRef} />
			</Sub>
			<Sub id='3' heading='Resume'>
				<Resume sectionRef={sectionRef} />
			</Sub>
			<Next
				className={styles.next}
				sectionRef={sectionRef}
				pushTo='/work'
				buttonText='See my work'
				setDirection={setDirection}
				setIsSubpathOpen={setIsSubpathOpen}
			/>
		</>
	);
}
