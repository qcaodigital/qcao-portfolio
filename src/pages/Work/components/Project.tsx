//video/gif is 1412x993 @ 50% zoom on firefox

import styles from './Project.module.scss';
import { technologies } from '../../../data/Skillset.data';
import ExternalSite from './ExternalSite';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import MinText from './../../../components/animation/MinText';
import { projectType } from './../Work.data';

interface ProjectProps {
	projectData: projectType;
	openPreview: () => void;
	closePreview: () => void;
	disableLive: boolean;
}

interface IprojectData {
	imgFilenames: string[];
	gifFilename: string;
	liveLink: string;
	githubLink: string;
	conceptText: string;
	notesText: string;
	challengesText: string;
	previewOpen: boolean;
	techs: string[];
}

export default function Project({
	projectData,
	openPreview,
	closePreview,
	disableLive,
}: ProjectProps) {
	const {
		imgFilenames,
		gifFilename,
		liveLink,
		githubLink,
		conceptText,
		notesText,
		challengesText,
		previewOpen,
		techs,
	}: IprojectData = projectData;
	const [currentImg, setCurrentImg] = useState<number>(0);

	useEffect(() => {
		function intervalCb() {
			setCurrentImg((curr) => {
				if (imgFilenames[curr + 1]) {
					return curr + 1;
				} else {
					return 0;
				}
			});
		}
		const interval = setInterval(intervalCb, 5000);
		return () => {
			clearInterval(interval);
		};
	}, [imgFilenames]);

	const framerVariants: { [key: string]: any } = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 0.75,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 1.5,
			},
		},
	};

	return (
		<div className={styles.project}>
			<div className={styles.imgContainer}>
				<div className={styles.gifContainer}>
					<img
						className={styles.gif}
						src={`/imgs/project_gifs/${gifFilename}`}
						alt={`gif reel of ${liveLink}`}
					/>
				</div>
				<div className={styles.mockupContainer}>
					<img
						className={styles.mockupImgTemplate}
						src={`/imgs/mockups/mockup-template.png`}
						alt={`Mock up of `}
					/>
					<AnimatePresence>
						<motion.img
							key={`/imgs/mockups/${imgFilenames[currentImg]}`}
							className={styles.mockupImg}
							src={`/imgs/mockups/${imgFilenames[currentImg]}`}
							alt={`Mock up of `}
							initial={framerVariants.initial}
							exit={framerVariants.exit}
							animate={framerVariants.animate}
						/>
					</AnimatePresence>
				</div>
				<div className={styles.links} data-live-disabled={disableLive}>
					{!disableLive && (
						<>
							<a
								className={styles.live}
								href={liveLink}
								target='_blank'
								rel='noopener noreferrer'
							>
								<span>
									Live Link
									<i className={`${styles.icon} fas fa-external-link-alt`}></i>
								</span>
							</a>
							<button onClick={openPreview}>
								<span>Preview</span>
							</button>
						</>
					)}
					<a
						className={styles.github}
						href={githubLink}
						target='_blank'
						rel='noopener noreferrer'
					>
						<span>
							GitHub Repository
							<i className={`${styles.icon} fas fa-external-link-alt`}></i>
						</span>
					</a>
				</div>
			</div>
			<div className={styles.info}>
				<div className={styles.group} id={styles.concept}>
					<p className={styles.label}>Concept:</p>
					<MinText threshold={0.5} buttonClassName={styles.readMoreBtn}>
						<p className={styles.text}>{conceptText}</p>
					</MinText>
				</div>
				<div className={styles.group} id={styles.tech}>
					<p className={styles.label}>Technologies Used:</p>
					<ul className={styles.icons}>
						{techs?.map((tech) => (
							<li key={tech} className={styles.tech}>
								<img src={`/imgs/tech_logos/${tech}.png`} alt={`${tech} icon`} />
								<p className={styles.label}>
									{technologies.filter((j) => j.filename === tech)[0].label}
								</p>
							</li>
						))}
					</ul>
				</div>
				{notesText.length > 0 && (
					<div className={styles.group} id={styles.notes}>
						<p className={styles.label}>Other Notes:</p>
						<p className={styles.text}>{notesText}</p>
					</div>
				)}
				<div className={styles.group} id={styles.challenges}>
					<p className={styles.label}>Challenges:</p>
					<MinText threshold={0.5} buttonClassName={styles.readMoreBtn}>
						<p className={styles.text}>{challengesText}</p>
					</MinText>
				</div>
			</div>
			<AnimatePresence>
				{previewOpen && <ExternalSite link={liveLink} closePreview={closePreview} />}
			</AnimatePresence>
		</div>
	);
}
