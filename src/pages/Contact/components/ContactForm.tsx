import styles from './ContactForm.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import Form from '../../../components/common/Form';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { useState } from 'react';

export default function ContactForm() {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

	function handleSubmit() {
		// emailjs.sendForm(
		// 'service_1jpy2lj',
		// 'template_02zr4t5',
		// formRef.current!,
		// 'user_LZB9QYVqJjd8Iz6MZcoTm'
		// );
		setTimeout(() => {
			setShowConfirmation(true);
		}, 500);
		setTimeout(() => {
			setShowConfirmation(false);
		}, 5000);
	}

	return (
		<motion.section className={styles.contactForm}>
			<h1>Drop a message!</h1>
			<Form
				ref={formRef}
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
				onSubmit={handleSubmit}
			/>
			<AnimatePresence>
				{showConfirmation && (
					<motion.div
						className={styles.modal}
						initial={{ opacity: 0, y: 25 }}
						exit={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
					>
						<i className={`${styles.checkmark} fas fa-check-circle`}></i>
						<p>Your message was sent!</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.section>
	);
}
