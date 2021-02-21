import styles from './Resume.module.scss';
import { jobs, job } from './Resume.data';

export default function Resume() {
	return (
		<>
			<div className={styles.resume}>
				<p className={styles.copy}></p>
				<section id={styles.experience}>
					<h5 className={styles.sectionLabel}>Work Experience</h5>
					{jobs.map(
						(job: job): JSX.Element => (
							<div key={job.id} id={job.id} className={styles.job}>
								<h6 className={styles.title}>{job.title}</h6>
								<p className={styles.location}>{job.location}</p>
								<p className={styles.timeframe}>
									{job.yearStart}
									{job.yearEnd}
								</p>
								<p className={styles.copy}>{job.copy}</p>
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
					<h6>Associates of Arts: STEM Core</h6>
					<p>Montgomery College</p>
					<p>Rockville, MD</p>
					<em>2012</em>
				</section>
			</div>
		</>
	);
}
