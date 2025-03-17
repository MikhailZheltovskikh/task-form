import React from 'react';
import { TextInput, Button } from '@mantine/core';
import { useRef, useState } from 'react';
import { formBtnsBox, formStyled, wrapperStyled } from './styled';

interface SigninProps {
	handleSubmit: () => void;
	formRef: React.RefObject<HTMLFormElement>;
}

export const Signin: React.FC<SigninProps> = ({ handleSubmit, formRef }) => {
	const [inputs, setInputs] = useState<{ [key: string]: string }>({});

	const handelChenge = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleReset = () => {
		setInputs({});
	};

	return (
		<div style={wrapperStyled}>
			<form
				ref={formRef}
				style={formStyled}
				onChange={handelChenge}
				onSubmit={handleSubmit}
				onReset={handleReset}
			>
				<TextInput
					size="md"
					label="Ваше имя"
					withAsterisk
					placeholder="Введите ваше имя"
					type="email"
					name="login"
					required
				/>
				<TextInput
					size="md"
					label="Ваш пароль"
					withAsterisk
					mt="20px"
					placeholder="Введите пароль"
					type="password"
					name="password"
					required
				/>
				<div style={formBtnsBox}>
					<Button type="submit" mt="30px" variant="filled" color="indigo">
						Войти
					</Button>
					<Button type="reset" mt="30px" variant="outline" color="red">
						Отчистить поля
					</Button>
				</div>
			</form>
		</div>
	);
};
