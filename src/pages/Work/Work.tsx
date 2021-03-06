import { Dispatch, SetStateAction } from 'react';
import Landing from '../../components/common/Landing';
import Sub from '../About/components/Sub';
import styles from './Work.module.scss';
import { viewportType } from './../../components/hooks/useViewport';
import ReactImageMagnify from 'react-image-magnify';
import Project from './components/Project';
import Next from '../../components/common/Next';

interface WorkProps {
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	setDirection: Dispatch<SetStateAction<'up' | 'down'>>;
	viewport: viewportType;
}

export default function Work({
	isSubpathOpen,
	setIsSubpathOpen,
	sectionRef,
	setDirection,
	viewport,
}: WorkProps) {
	return (
		<>
			<Landing
				img={{ src: '/imgs/work.jpg', alt: '' }}
				headerText='My Work'
				subheaderText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nihil non corrupti exercitationem debitis voluptate dolorum. Est veniam itaque vitae, consequatur animi enim quae.'
				isSubpathOpen={isSubpathOpen}
				setIsSubpathOpen={setIsSubpathOpen}
				sectionRef={sectionRef}
			/>
			<section id={styles[1]}>
				<div className={styles.bannerContainer}>
					<img src='/imgs/work_banner.jpg' alt='qcaodigital portfolio work' />
				</div>
				<Sub heading='Cocktail Curations' id='1' reduceFont break={viewport.rank < 2}>
					<Project
						mockupImg='/imgs/mockups/cc_mockup.png'
						liveLink='https://cocktailcurations.vercel.app'
						githubLink='https://github.com/qcaodigital/cocktail_curations'
						techs={[
							'reactjs',
							'nextjs',
							'framer',
							'javascript',
							'sass',
							'css',
							'html',
							'prismic',
							'mailgun',
						]}
					/>
				</Sub>
				<Sub heading='Charred Food' id='2' reduceFont>
					<Project
						mockupImg='/imgs/mockups/charred_mockup.png'
						liveLink='https://charred.netlify.app/'
						githubLink='https://github.com/qcaodigital/CharredFood'
						techs={[
							'reactjs',
							'reactrouter',
							'express',
							'nodejs',
							'javascript',
							'css',
							'html',
						]}
					/>
				</Sub>
				<Sub heading='Staxx' id='3' reduceFont>
					<Project
						mockupImg='/imgs/mockups/staxx_mockup.png'
						liveLink='https://staxxz.herokuapp.com/'
						githubLink='https://github.com/qcaodigital/staxx'
						techs={[
							'jquery',
							'express',
							'nodejs',
							'mongodb',
							'javascript',
							'sass',
							'css',
							'html',
						]}
					/>
				</Sub>
				<Sub heading='Portfolio' id='4' reduceFont>
					<Project
						mockupImg='/imgs/mockups/portfolio_mockup.png'
						liveLink='https://cocktailcurations.vercel.app'
						githubLink='https://github.com/qcaodigital/cocktail_curations'
						techs={[
							'reactjs',
							'reactrouter',
							'framer',
							'typescript',
							'javascript',
							'sass',
							'css',
							'html',
						]}
					/>
				</Sub>
			</section>
			<Next
				pushTo='/contact'
				sectionRef={sectionRef}
				buttonText="Let's Chat"
				setDirection={setDirection}
				setIsSubpathOpen={setIsSubpathOpen}
			/>
		</>
	);
}
