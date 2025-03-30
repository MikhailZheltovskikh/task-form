const validateEmail = (email: string): boolean => {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
};

interface InputField {
	name: string;
	required: boolean;
}

interface FormData {
	[key: string]: string | undefined;
}

interface ValidationErrors {
	[key: string]: string;
}

export const validateForm = (
	inputs: InputField[],
	formData: FormData,
): ValidationErrors => {
	let errors: ValidationErrors = {};

	inputs.forEach(({ name, required }) => {
		const value = formData[name];

		if (required && !value) {
			errors[name] = 'Поле не может быть пустым';
		} else if (name === 'email' && !validateEmail(value as string)) {
			errors[name] = 'Некорректный email';
		} else if (name === 'repeatPassword') {
			if (value !== formData.password) {
				errors[name] = 'Пароли не совпадают';
			}
		}
	});

	return errors;
};
