import styles from './Resume.module.scss';
import { jobs, job, education, educationType } from './Resume.data';
import Job from './Job';
import TypeWriter from '../../../components/animation/TypeWriter';

interface ResumeProps {
	sectionRef: React.MutableRefObject<HTMLElement | null>;
}

export default function Resume({ sectionRef }: ResumeProps) {
	return (
		<div id={styles.resume}>
			<section id={styles.experience}>
				<TypeWriter trigger='inView'>
					<h5 className={styles.sectionLabel}>Work Experience</h5>
				</TypeWriter>
				{jobs.map(
					(job: job, idx: number): JSX.Element => (
						<Job key={job.id} job={job} sectionRef={sectionRef} idx={idx} />
					)
				)}
			</section>
			<section id={styles.education}>
				<h5 className={styles.sectionLabel}>Education</h5>
				<div className={styles.itemContainer}>
					{education
						.sort((a, b) => +a.yearCompleted - +b.yearCompleted)
						.reverse()
						.map(
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
	);
}
