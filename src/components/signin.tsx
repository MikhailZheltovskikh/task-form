import React from 'react';
import { TextInput, Button } from '@mantine/core';
import { useRef, useState } from 'react';

export const Signin: React.FC = () => {
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
	const [inputs, setInputs] = useState<{ [key: string]: string }>({});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('inputs:', inputs);
		formRef.current?.reset();
	};

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
