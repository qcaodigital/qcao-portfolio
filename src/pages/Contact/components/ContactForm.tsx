import styles from './ContactForm.module.scss';
import { viewportType } from './../../../components/hooks/useViewport';
import { motion } from 'framer-motion';
import { ChangeEvent, useState } from 'react';

interface ContactFormProps {
	viewport: viewportType;
}

const inputRegs: { [key: string]: RegExp } = {
	general: /\^[a-zA-Z]{2,}$/,
	// eslint-disable-next-line
	email: /\^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/,
};

export default function ContactForm({ viewport }: ContactFormProps) {
	const initialInput: { [key: string]: string } = {
		name: '',
		email: '',
		company: '',
		message: '',
	};

	const [input, setInput] = useState<{ [key: string]: string }>(initialInput);
	const [errors, setErrors] = useState<{ [key: string]: string }>(initialInput);

	function handleInput(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setInput((curr) => ({ ...curr, [e.target.id]: e.target.value }));

		if (!inputRegs[e.target.id].test(input[e.target.id])) {
			setErrors((curr) => ({ ...curr, [e.target.id]: `error with ${e.target.id}` }));
		}
	}

	return (
		<motion.section className={styles.contactForm}>
			<h1>Drop a message!</h1>
			<form>
				<fieldset>
					<legend>Name</legend>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						autoComplete='off'
						onChange={handleInput}
						value={input.name}
					/>
				</fieldset>
				<fieldset>
					<legend>Email Address</legend>
					<label htmlFor='email'>Email Address:</label>
					<input
						type='text'
						id='email'
						autoComplete='off'
						onChange={handleInput}
						value={input.email}
					/>
				</fieldset>
				<fieldset>
					<legend>Company</legend>
					<label htmlFor='company'>Company:</label>
					<input
						type='text'
						id='company'
						autoComplete='off'
						onChange={handleInput}
						value={input.company}
					/>
				</fieldset>
				<fieldset>
					<legend>Message</legend>
					<label htmlFor='message'>Message:</label>
					<textarea id='message' onChange={handleInput} value={input.message}></textarea>
				</fieldset>
				<button
					type='submit'
					onClick={(e) => {
						e.preventDefault();
						if (Object.keys(errors).every((key) => errors[key].length === 0)) {
							alert('form submitted');
						} else {
							alert('theres an error');
						}
					}}
				>
					Submit
				</button>
			</form>
		</motion.section>
	);
}
