import { job } from './Resume.data';
import styles from './Job.module.scss';
import { useRef } from 'react';
// import useCheckThreshold from './../../../components/hooks/useCheckThreshold';

interface JobProps {
	job: job;
	idx: number;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
}

export default function Job({ job, sectionRef, idx }: JobProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	// const posThres = useCheckThreshold(sectionRef.current, ref.current, {
	// 	topIsBelow: idx === 0 ? null : 0.7,
	// 	bottomIsAbove: 0.3,
	// });

	return (
		<div
			ref={ref}
			id={job.id}
			className={styles.job}
			// data-inView={`${posThres ? 'true' : 'false'}`}
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
	);
}
