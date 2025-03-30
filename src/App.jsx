import { Signin, Signup } from './components';

export const App = () => {
	const handleSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<Signin onSubmit={(data) => handleSubmit(data)} />
			<Signup onSubmit={(data) => handleSubmit(data)} />
		</>
	);
};
