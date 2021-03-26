import styles from './ContactForm.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import Form from '../../../components/common/Form';
import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';

interface ContactFormProps {}

const ContactForm = React.forwardRef<HTMLFormElement, ContactFormProps>((props, forwardedRef) => {
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
		<motion.section className={styles.contactForm} ref={forwardedRef}>
			<header>
				<h2>Want to work together?</h2>
				<h1>
					Drop a <u>message!</u>
				</h1>
			</header>
			<div className={styles.formArea}>
				<div className={styles.info}>
					<h3>Other ways to get in touch.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora
						deserunt quidem molestias a. Aspernatur sint impedit dignissimos eos ab
						mollitia aperiam maxime sit expedita tempora ad, vero dolorem? Amet ea
						dolorem, ipsam minus, ab optio magni adipisci labore a in quos ut.
						Recusandae tenetur deserunt placeat laudantium dicta perferendis!
					</p>
					<div className={styles.socialList}>
						<a
							href='https://github.com/qcaodigital'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.icon}
						>
							<i className='fab fa-github'></i>
						</a>
						<a href='mailto: qcao.digital@gmail.com' className={styles.icon}>
							<i className='fas fa-at'></i>
						</a>
					</div>
				</div>
				<Form
					ref={formRef}
					fields={{
						name: { as: 'input', type: 'text', error: 'invalid name' },
						company: {
							as: 'input',
							type: 'text',
							error: 'invalid company name',
						},
						email: {
							as: 'input',
							type: 'text',
							error: 'invalid email address',
							//eslint-disable-next-line
							regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						},
						message: {
							as: 'textarea',
							error: 'invalid message',
						},
					}}
					onSubmit={handleSubmit}
				/>
			</div>
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
});

export default ContactForm;
