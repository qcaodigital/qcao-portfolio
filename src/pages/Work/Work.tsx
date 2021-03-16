import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Landing from '../../components/common/Landing';
import Sub from '../About/components/Sub';
import styles from './Work.module.scss';
import { viewportType } from './../../components/hooks/useViewport';
import { projects as projectsData, projectType } from './Work.data';
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
	const [projects, setProjects] = useState<projectType[]>(projectsData);

	//Controls for project previews//
	function openPreview(projectName: string) {
		setProjects((curr) =>
			curr.map((project) => ({ ...project, previewOpen: projectName === project.heading }))
		);
	}

	function closePreview() {
		setProjects((curr) => curr.map((project) => ({ ...project, previewOpen: false })));
	}

	useEffect(() => {
		if (projects.some((project) => project.previewOpen) && sectionRef.current) {
			sectionRef.current.style.overflow = 'hidden';
		} else if (sectionRef.current && isSubpathOpen) {
			sectionRef.current.style.overflow = 'hidden scroll';
		}
	}, [projects, isSubpathOpen, sectionRef]);

	useEffect(() => {
		function closePreviews(e: KeyboardEvent) {
			if (e.key === 'Escape') {
				closePreview();
			}
		}
		window.addEventListener('keyup', closePreviews);
	}, []);
	//============================//

	return (
		<>
			<Landing
				img={{ src: '/imgs/work.jpg', alt: '' }}
				headerText='My Work'
				subheaderText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nihil non corrupti exercitationem debitis voluptate dolorum. Est veniam itaque vitae, consequatur animi enim quae.'
				isSubpathOpen={isSubpathOpen}
				setIsSubpathOpen={setIsSubpathOpen}
				sectionRef={sectionRef}
				ctaText='see projects'
			/>
			<section id={styles[1]}>
				<div className={styles.bannerContainer}>
					<img src='/imgs/work_banner.jpg' alt='qcaodigital portfolio work' />
				</div>
				{projects.map((project, idx) => (
					<Sub
						key={project.heading}
						heading={project.heading}
						id={idx + 1 + ''}
						reduceFont={project.reduceFont}
						break={viewport.rank < (project.breakAt || Infinity)}
					>
						<Project
							key={project.heading}
							mockupImg={`/imgs/mockups/${project.imgFilename}`}
							liveLink={project.liveLink}
							githubLink={project.githubLink}
							techs={project.techs}
							previewOpen={project.previewOpen}
							openPreview={openPreview.bind(null, project.heading)}
							closePreview={closePreview}
							disableLive={project.heading === 'Portfolio'}
						/>
					</Sub>
				))}
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
