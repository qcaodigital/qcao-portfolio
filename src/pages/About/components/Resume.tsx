import { useRef, useEffect } from 'react';
import styles from './Resume.module.scss';
import { jobs, job, education, educationType } from './Resume.data';
import useGetElementBoundingRectPos from './../../../components/hooks/useGetElementBoundingRectPos';

interface jobRefs {
	[key: string]: HTMLDivElement | null;
}

interface ResumeProps {
	sectionRef: React.MutableRefObject<HTMLElement | null>;
}

export default function Resume({ sectionRef }: ResumeProps) {
	const jobRef = useRef<jobRefs>({});
	const decPos = useGetElementBoundingRectPos(sectionRef.current, jobRef.current.dec, {
		bottom: 0.2,
		top: 0.8,
	});

	return (
		<>
			<div id={styles.resume}>
				<section id={styles.experience}>
					<h5 className={styles.sectionLabel}>Work Experience</h5>
					{jobs.map(
						(job: job): JSX.Element => (
							<div
								ref={(el) => (jobRef.current[job.id] = el)}
								key={job.id}
								id={job.id}
								className={styles.job}
							>
								<div className={styles.basicInfo}>
									<p className={styles.timeframe}>
										{job.yearStart} - {job.yearEnd}
									</p>
									<p className={styles.employer}>{job.employer}</p>
									<h6 className={styles.title}>{job.title}</h6>
									<p className={styles.location}>{job.location}</p>
									<p className={styles.copy}>{job.copy}</p>
								</div>
								<ul className={styles.infoList}>
									{job.info.map(
										(info: string, idx: number): JSX.Element => (
											<li key={idx} className={styles.info}>
												{info}
											</li>
										)
									)}
								</ul>
							</div>
						)
					)}
				</section>
				<section id={styles.education}>
					<h5 className={styles.sectionLabel}>Education</h5>
					<div className={styles.itemContainer}>
						{education.map(
							(item: educationType): JSX.Element => (
								<div key={item.title} className={styles.item}>
									<h6>{item.title}</h6>
									<p>{item.school}</p>
									<p>{item.location}</p>
									<em>{item.yearCompleted}</em>
								</div>
							)
						)}
					</div>
				</section>
			</div>
		</>
	);
}
