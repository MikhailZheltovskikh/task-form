import { useRef } from 'react';
import { Signin, Signup } from './components';

export const App = () => {
	const formRef = (useRef < HTMLFormElement) | (null > null);

	const handleSubmit = (e) => {
		e.preventDefault();
		formRef.current?.reset();
	};

	return (
		<>
			<Signin handleSubmit={handleSubmit} formRef={formRef} />
			<Signup handleSubmit={handleSubmit} formRef={formRef} />
		</>
	);
};
