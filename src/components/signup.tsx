import React from 'react';
import { TextInput, Button, Radio, RadioGroup, Text } from '@mantine/core';
import { useRef, useState } from 'react';
import { IconAt } from '@tabler/icons-react';

export const Signup: React.FC = () => {
	const wrapperStyled: React.CSSProperties = {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	const formStyled: React.CSSProperties = {
		maxWidth: '500px',
		width: '100%',
	};

	const formBtnsBox: React.CSSProperties = {
		display: 'flex',
		gap: '20px',
	};

	const formRef = useRef<HTMLFormElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const repeatPasswordRef = useRef<HTMLInputElement | null>(null);
	const [inputs, setInputs] = useState<{ [key: string]: string }>({});
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('inputs:', inputs);

		formRef.current?.reset();
		setInputs({});
		setError(null);
	};

	const handelChenge = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));

		if (e.target.name === 'password' || e.target.name === 'repeatPassword') {
			if (passwordRef.current?.value !== repeatPasswordRef.current?.value) {
				setError('Пароли не совпадают');
			} else {
				setError(null);
			}
		}
	};

	const handleReset = () => {
		setInputs({});
		setError(null);
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
					label="Имя"
					withAsterisk
					placeholder="Введите ваше имя"
					type="text"
					name="name"
					mt="20px"
					required
				/>
				<TextInput
					size="md"
					label="Ник"
					leftSection={<IconAt size="0.8rem" />}
					withAsterisk
					placeholder="Введите ваш ник"
					type="text"
					name="nikname"
					mt="20px"
					required
				/>
				<TextInput
					size="md"
					label="Почта"
					withAsterisk
					placeholder="Введите вашу почту"
					type="email"
					name="login"
					mt="20px"
					required
				/>
				<Text size="md" mt="20px" fw={600}>
					Пол
				</Text>

				<Radio
					required
					label="Мужской"
					size="md"
					mt="10px"
					name="sex"
					value="Мужской"
				/>
				<Radio
					required
					label="Женский"
					size="md"
					mt="10px"
					name="sex"
					value="Женский"
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
					ref={passwordRef}
				/>
				<TextInput
					size="md"
					label="Повторите пароль"
					withAsterisk
					mt="20px"
					placeholder="Введите пароль"
					type="password"
					name="repeatPassword"
					required
					ref={repeatPasswordRef}
					error={error}
				/>
				<div style={formBtnsBox}>
					<Button type="submit" mt="30px" variant="filled" color="indigo">
						Отправить
					</Button>
					<Button type="reset" mt="30px" variant="outline" color="red">
						Отчистить поля
					</Button>
				</div>
			</form>
		</div>
	);
};
