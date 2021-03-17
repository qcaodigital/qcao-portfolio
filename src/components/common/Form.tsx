import React, { useEffect, useMemo, useState, ChangeEvent, MouseEvent, CSSProperties } from 'react';

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

export default function Form({
	fields,
	onSubmit,
	formStyles,
	fieldsetStyles,
	labelStyles,
	inputStyles,
}: FormProps): JSX.Element {
	//===============================================//
	//Create initial input state from fields provided//
	const initialInputState: { [key: string]: string } = useMemo(() => ({}), []);
	for (const key in fields) {
		initialInputState[key] = '';
	}
	//===============================================//

	const [input, setInput] = useState<{ [key: string]: string }>(initialInputState);
	const [errors, setErrors] = useState<string[]>([]);

	function handleInput(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setInput((curr) => ({ ...curr, [e.target.id]: e.target.value }));
	}

	function handleSubmit(e: MouseEvent) {
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
			onSubmit();
			//Clear input
			setInput(initialInputState);
		}
	}, [errors, initialInputState, onSubmit]);

	return (
		<form style={formStyles}>
			{Object.keys(fields).map((key: string) => {
				const currentField = fields[key];
				const props: { [key: string]: any } = {
					type: currentField.type,
					id: key,
					onChange: handleInput,
					value: input[key],
					'data-invalid': errors.includes(key),
					class: currentField.class,
					name: currentField.name,
					style: inputStyles,
				};
				return (
					<fieldset key={key} style={fieldsetStyles}>
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
			<button type='submit' onClick={handleSubmit}>
				Submit
			</button>
		</form>
	);
}
