import styles from './ContactForm.module.scss';
import { motion } from 'framer-motion';
import Form from '../../../components/common/Form';

export default function ContactForm() {
	return (
		<motion.section className={styles.contactForm}>
			<h1>Drop a message!</h1>
			<Form
				fields={{
					name: { as: 'input', type: 'text' },
					company: {
						as: 'input',
						type: 'text',
					},
					email: {
						as: 'input',
						type: 'text',
						//eslint-disable-next-line
						regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
					},
					message: {
						as: 'textarea',
					},
				}}
				onSubmit={() => alert('submitted')}
			/>
		</motion.section>
	);
}
