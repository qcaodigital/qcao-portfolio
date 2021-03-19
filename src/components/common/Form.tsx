import React, { useEffect, useMemo, useState, ChangeEvent, CSSProperties, FormEvent } from 'react';

interface FormProps {
	fields: { [key: string]: fieldsType };
	onSubmit: (...args: any[]) => any;
	formStyles?: CSSProperties;
	fieldsetStyles?: CSSProperties;
	labelStyles?: CSSProperties;
	inputStyles?: CSSProperties;
}

interface fieldsType {
	as: string;
	regExp?: RegExp;
	type?: string;
	label?: string;
	class?: string;
	name?: string;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
	({ fields, onSubmit, formStyles, fieldsetStyles, labelStyles, inputStyles }, forwardedRef) => {
		//===============================================//
		//Create initial input state from fields provided//
		const initialInputState: { [key: string]: string } = useMemo(() => ({}), []);
		for (const key in fields) {
			initialInputState[key] = '';
		}
		//===============================================//

		const [showLoader, setShowLoader] = useState<boolean>(false);
		const [input, setInput] = useState<{ [key: string]: string }>(initialInputState);
		const [errors, setErrors] = useState<string[]>([]);

		function handleInput(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
			setInput((curr) => ({ ...curr, [e.target.id]: e.target.value }));
		}

		function handleSubmit(e: FormEvent): void {
			e.preventDefault();

			for (const key in input) {
				if (fields[key].regExp && !fields[key].regExp?.test(input[key])) {
					//Push name of field into errors array if field is not valid
					setErrors((errs) => [...errs, key]);
				} else if (input[key].length < 2) {
					//Push name of field into errors array if field does not have a regExp but is less than 2 chars
					setErrors((errs) => [...errs, key]);
				} else {
					//Filter out validated field name from errors array
					setErrors((errs) => errs.filter((err) => err !== key));
				}
			}
		}

		useEffect(() => {
			if (errors.length === 0 && !Object.keys(input).some((key) => input[key].length === 0)) {
				setShowLoader(true);
				onSubmit();
				//Clear input
				setTimeout(() => {
					setInput(initialInputState);
					setShowLoader(false);
				}, 500);
			}
			//omit input from dependency array so that useeffect is not running on input but able to detect when form is submitted and inputs are empty
			//eslint-disable-next-line
		}, [errors, initialInputState]);

		return (
			<form ref={forwardedRef} style={formStyles} onSubmit={handleSubmit}>
				{Object.keys(fields).map((key: string) => {
					const currentField = fields[key];
					const props: { [key: string]: any } = {
						type: currentField.type,
						id: key,
						name: key,
						value: input[key],
						onChange: handleInput,
						'data-invalid': errors.includes(key),
						className: currentField.class,
						style: inputStyles,
					};
					return (
						<fieldset key={key} style={fieldsetStyles} data-type={currentField.as}>
							<legend>{currentField.label || key}</legend>
							<label
								style={labelStyles}
								htmlFor={currentField.label || key}
								data-invalid={errors.includes(key)}
							>
								{currentField.label || key}
							</label>
							{React.createElement(currentField.as, props)}
						</fieldset>
					);
				})}
				<button type='submit'>
					<div>
						{showLoader ? <i className='fas fa-circle-notch fa-spin'></i> : 'submit'}
					</div>
				</button>
			</form>
		);
	}
);

export default Form;
