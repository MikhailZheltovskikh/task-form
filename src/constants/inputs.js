export const inputsSingin = [
	{
		label: 'Email',
		required: true,
		type: 'email',
		placeholder: 'email',
		name: 'email',
		icon: 'mail',
	},
	{
		label: 'Password',
		required: true,
		type: 'password',
		placeholder: 'password',
		name: 'password',
		icon: 'password',
	},
];

export const inputsSingup = [
	{
		label: 'Имя',
		required: true,
		type: 'text',
		placeholder: 'Имя',
		name: 'userName',
	},
	{
		label: 'Ник',
		required: true,
		type: 'text',
		placeholder: 'Ник',
		name: 'nikname',
	},
	{
		label: 'Почта',
		required: true,
		type: 'email',
		placeholder: 'Почта',
		name: 'email',
		icon: 'mail',
	},
	{
		label: 'Пол',
		required: true,
		type: 'radio',
		name: 'sex',
		options: [
			{ value: 'Мужчина', label: 'Мужчина' },
			{ value: 'Женщина', label: 'Женщина' },
		],
	},
	{
		label: 'Пароль',
		required: true,
		type: 'password',
		placeholder: 'Пароль',
		name: 'password',
		icon: 'password',
	},
	{
		label: 'Повторить пароль',
		required: true,
		type: 'password',
		placeholder: 'Повторить пароль',
		name: 'repeatPassword',
		icon: 'password',
	},
];
