import './button.scss';

export const Button = (dependence) => {
	const { children, type, size, radius } = dependence;

	return (
		<button type={type} className={`button size-${size} border-radius-${radius}`}>
			{children}
		</button>
	);
};
