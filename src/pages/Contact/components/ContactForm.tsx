import styles from './ContactForm.module.scss';
import { viewportType } from './../../../components/hooks/useViewport';
import { motion } from 'framer-motion';

interface ContactFormProps {
	viewport: viewportType;
}

export default function ContactForm({ viewport }: ContactFormProps) {
	return (
		<motion.section
			className={styles.contactForm}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<form>
				<label htmlFor='name'>Name:</label>
				<input id='name' type='text' />
				<label htmlFor='company'>Company:</label>
				<input id='company' type='text' />
				<label htmlFor='message'>Message:</label>
				<textarea id='message' />
				<input type='submit' value='Submit' />
			</form>
		</motion.section>
	);
}
