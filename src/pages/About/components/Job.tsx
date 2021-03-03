import { job } from './Resume.data';
import styles from './Job.module.scss';
import { useInView } from 'react-intersection-observer';

interface JobProps {
	job: job;
}

export default function Job({ job }: JobProps) {
	const [ref, inView] = useInView();

	return (
		<div ref={ref} id={job.id} className={styles.job} data-in-view={inView ? 'true' : 'false'}>
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
