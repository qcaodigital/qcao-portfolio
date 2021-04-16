import styles from './Resume.module.scss';
import { jobs, education, educationType } from '../../../data/Resume.data';
import Job from './Job';
import TypeWriter from '../../../components/animation/TypeWriter';
import { useInView } from 'react-intersection-observer';
import Notification from '../../../components/common/Notifcation';
import { AnimatePresence } from 'framer-motion';
import { viewportType } from './../../../components/hooks/useViewport';

interface ResumeProps {
	viewport: viewportType;
}

export default function Resume({ viewport }: ResumeProps) {
	const [ref, inView] = useInView({ threshold: 0.25 });

	return (
		<div id={styles.resume} ref={ref}>
			<section id={styles.experience}>
				<div className={styles.header}>
					<TypeWriter trigger='inView' color='var(--main-color)'>
						<h5 className={styles.sectionLabel}>Work Experience</h5>
					</TypeWriter>
					<p className={styles.copy}>
						While my resume mostly reflects my career in the hospitality industry, the
						<strong> soft skills</strong> and <strong>problem-solving abilities</strong>{' '}
						I have acquired and refined during that time I find would be valuable assets
						to any company.
					</p>
					<p className={styles.copy}>
						Please take some time to read through a few of my accomplishments through
						the course of my work history.
					</p>
				</div>
				{jobs.map((job) => (
					<Job key={job.id} job={job} />
				))}
			</section>
			<section id={styles.education}>
				<div className={styles.header}>
					<h5 className={styles.sectionLabel}>Education</h5>
				</div>
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
			<AnimatePresence>
				{inView && viewport.rank > 2 && (
					<Notification
						text='Download my resume'
						fontAwesomeIconClasses='fas fa-download'
						filename='QuanCaoResume.pdf'
						direction='x'
					/>
				)}
			</AnimatePresence>
		</div>
	);
}
