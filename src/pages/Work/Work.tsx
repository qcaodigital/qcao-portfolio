import { Dispatch, SetStateAction } from 'react';
import Landing from '../../components/common/Landing';
import Sub from '../About/components/Sub';
import styles from './Work.module.scss';
import { viewportType } from './../../components/hooks/useViewport';
import ReactImageMagnify from 'react-image-magnify';

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
				{/* <Sub heading='Intro' id='0' reduceFont>
					<h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos
						debitis recusandae aut iure eveniet atque cupiditate, non sequi commodi
						quidem quasi, adipisci delectus, eius quisquam similique possimus odit
						error. Delectus, placeat, nihil sunt quam hic itaque, officiis animi a sint
						velit adipisci. Non dolor accusamus ad qui sunt! Saepe!
					</h3>
				</Sub> */}
				<Sub heading='Cocktail Curations' id='1' reduceFont break={viewport.rank < 2}>
					<ReactImageMagnify
						imageClassName={styles.mockupImg}
						enlargedImageContainerStyle={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
						}}
						{...{
							smallImage: {
								alt: '',
								isFluidWidth: true,
								src: '/imgs/mockups/cocktail_curations-transparent-min.png',
							},
							largeImage: {
								alt: '',
								isFluidWidth: true,
								src: '/imgs/mockups/cocktail_curations-transparent-min-lens.png',
							},
						}}
					/>
				</Sub>
				<Sub heading='Charred Food' id='2' reduceFont>
					test
				</Sub>
				<Sub heading='Staxx' id='3' reduceFont>
					test
				</Sub>
				<Sub heading='Portfolio' id='4' reduceFont>
					test
				</Sub>
			</section>
		</>
	);
}
