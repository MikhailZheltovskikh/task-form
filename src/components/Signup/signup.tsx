import React from 'react';
import { useState } from 'react';
import { inputsSingup } from '../../constants/inputs';
import { validateForm } from '../../helpers/validateForm';
import { FormWrapper, TextInput, Button, RadioInput } from '..';

interface SigninProps {
	onSubmit: (data: FormData) => void;
}

interface FormData {
	userName: string;
	nikname: string;
	email: string;
	sex: string;
	password: string;
	repeatPassword: string;
}

export const Signup: React.FC<SigninProps> = ({ onSubmit }) => {
	const initialState: FormData = {
		userName: '',
		nikname: '',
		email: '',
		sex: '',
		password: '',
		repeatPassword: '',
	};

	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [formData, setFormData] = useState<FormData>(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));

		const newErrors = validateForm(inputsSingup, {
			...formData,
			[name]: value,
		});

		setErrors((prev) => ({
			...prev,
			[name]: newErrors[name] || '',
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
		setFormData(initialState);
	};

	return (
		<FormWrapper>
			<form onChange={handleChange} onSubmit={handleSubmit}>
				{inputsSingup.map((item, index) =>
					item.type === 'radio' ? (
						<RadioInput key={index} size="m" {...item} />
					) : (
						<TextInput
							value={formData[item.name]}
							key={index}
							size="m"
							radius="m"
							error={errors[item.name]}
							{...item}
						/>
					),
				)}

				<Button type="submit" size="m" radius="m">
					Отправить
				</Button>
			</form>
		</FormWrapper>
	);
};
