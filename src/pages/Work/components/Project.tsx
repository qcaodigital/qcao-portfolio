import styles from './Project.module.scss';
import { technologies } from '../../../data/Skillset.data';
import ExternalSite from './ExternalSite';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ProjectProps {
	mockupImgs: string[];
	githubLink: string;
	liveLink: string;
	challengesText: string;
	conceptText: string;
	notesText: string;
	openPreview: () => void;
	closePreview: () => void;
	previewOpen: boolean;
	disableLive: boolean;
	techs?: string[];
}

export default function Project({
	mockupImgs,
	githubLink,
	liveLink,
	techs,
	challengesText,
	conceptText,
	notesText,
	openPreview,
	closePreview,
	previewOpen,
	disableLive,
}: ProjectProps) {
	const [currentImg, setCurrentImg] = useState<number>(0);

	useEffect(() => {
		function intervalCb() {
			setCurrentImg((curr) => {
				if (mockupImgs[curr + 1]) {
					return curr + 1;
				} else {
					return 0;
				}
			});
		}
		const interval = setInterval(intervalCb, 7500);
		return () => {
			clearInterval(interval);
		};
	}, [mockupImgs]);

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
			<div className={styles.info}>
				<div className={styles.group} id={styles.concept}>
					<p className={styles.label}>Concept:</p>
					<p className={styles.text}>{conceptText}</p>
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
					<p className={styles.text}>{challengesText}</p>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<img
					className={styles.mockupImgTemplate}
					src={`/imgs/mockups/mockup-template.png`}
					alt={`Mock up of ${liveLink}`}
				/>
				<AnimatePresence>
					<motion.img
						key={`/imgs/mockups/${mockupImgs[currentImg]}`}
						className={styles.mockupImg}
						src={`/imgs/mockups/${mockupImgs[currentImg]}`}
						alt={`Mock up of ${liveLink}`}
						initial={framerVariants.initial}
						exit={framerVariants.exit}
						animate={framerVariants.animate}
					/>
				</AnimatePresence>
				<div className={styles.links} data-live-disabled={disableLive}>
					{!disableLive && (
						<>
							<a
								className={styles.live}
								href={liveLink}
								target='_blank'
								rel='noopener noreferrer'
							>
								<span>Live Link</span>
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
						<span>GitHub Repository</span>
					</a>
				</div>
			</div>
			<AnimatePresence>
				{previewOpen && <ExternalSite link={liveLink} closePreview={closePreview} />}
			</AnimatePresence>
		</div>
	);
}
