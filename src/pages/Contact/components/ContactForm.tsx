import styles from './ContactForm.module.scss';
import { motion } from 'framer-motion';
import Form from '../../../components/common/Form';
import emailjs from 'emailjs-com';

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
				useEmailJS={{
					serviceID: 'service_1jpy2lj',
					templateID: 'template_02zr4t5',
					userID: 'user_LZB9QYVqJjd8Iz6MZcoTm',
				}}
			/>
		</motion.section>
	);
}
