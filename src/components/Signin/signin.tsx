import React, { useState } from 'react';
import { inputsSingin } from '../../constants/inputs';
import { validateForm } from '../../helpers/validateForm';
import { FormWrapper, TextInput, Button } from '../../components';

interface FormData {
	email: string;
	password: string;
}

interface SigninProps {
	onSubmit: (data: FormData) => void;
}

export const Signin: React.FC<SigninProps> = ({ onSubmit }) => {
	const initialState: FormData = {
		email: '',
		password: '',
	};

	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [formData, setFormData] = useState<FormData>(initialState);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));

		const newErrors = validateForm(inputsSingin, {
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
			<form onSubmit={handleSubmit} onChange={handleChange}>
				{inputsSingin.map((item, index) => (
					<TextInput
						value={formData[item.name]}
						key={index}
						size="m"
						radius="m"
						error={errors[item.name]}
						{...item}
					/>
				))}

				<Button type="submit" size="m" radius="m">
					Войти
				</Button>
			</form>
		</FormWrapper>
	);
};
