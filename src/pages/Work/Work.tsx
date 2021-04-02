import { Dispatch, SetStateAction, useState, useEffect, useRef } from 'react';
import Landing from '../../components/common/Landing';
import Sub from '../About/components/Sub';
import styles from './Work.module.scss';
import { viewportType } from './../../components/hooks/useViewport';
import { projects as projectsData, projectType } from './Work.data';
import Project from './components/Project';
import Next from '../../components/common/Next';
import Rellax from 'rellax';

interface WorkProps {
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	setDirection: Dispatch<SetStateAction<string>>;
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
		return () => window.removeEventListener('keyup', closePreviews);
	}, []);
	//============================//

	return (
		<>
			<Landing
				img={{ src: '/imgs/work.jpg', alt: '' }}
				headerText='My Work'
				subheaderText={`My projects are all built with design, responsiveness, and maintainability in mind. Come check them out.`}
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
							mockupImgs={project.imgFilenames}
							liveLink={project.liveLink}
							githubLink={project.githubLink}
							techs={project.techs}
							conceptText={project.conceptText}
							challengesText={project.challengesText}
							notesText={project.notesText}
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
				text='Like my work?'
				buttonText="Let's Chat"
				setDirection={setDirection}
				setIsSubpathOpen={setIsSubpathOpen}
			/>
		</>
	);
}
