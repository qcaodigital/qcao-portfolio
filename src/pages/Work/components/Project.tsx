import styles from './Project.module.scss';
import { technologies } from '../../../data/Skillset.data';
import ExternalSite from './ExternalSite';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ProjectProps {
	mockupImgs: string[];
	githubLink: string;
	liveLink: string;
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
		setInterval(intervalCb, 7500);
	}, [mockupImgs]);

	return (
		<div className={styles.project}>
			<div className={styles.info}>
				<div className={styles.group} id={styles.concept}>
					<p className={styles.label}>Concept:</p>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus qui
						aspernatur voluptatem odio molestiae, praesentium vitae cupiditate libero
						animi hic delectus dignissimos autem, corporis cumque architecto doloribus
						voluptatum nostrum?
					</p>
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
				<div className={styles.group} id={styles.time}>
					<p className={styles.label}>Time To Complete:</p>
					<p className={styles.text}>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className={styles.group} id={styles.challenges}>
					<p className={styles.label}>Challenges:</p>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni
						voluptas porro molestiae sapiente aperiam, officia quibusdam voluptatum
						libero, sequi quaerat saepe dicta? Delectus, quibusdam dolores? Ad magnam
						voluptas quibusdam, pariatur laboriosam vero in, ullam dolores aut ea
						molestias. Facere repellat accusantium cumque minus asperiores corrupti,
						fuga ea debitis dolorem.
					</p>
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
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.75 }}
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
