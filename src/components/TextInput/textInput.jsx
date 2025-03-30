import './textInput.scss';

export const TextInput = (dependence) => {
	const {
		label,
		size,
		required,
		type,
		placeholder,
		error,
		name,
		radius,
		icon,
		...props
	} = dependence;

	return (
		<div className={`textInput size-${size}`}>
			<div className="textInput-box">
				<div className="textInput-name">{label}</div>
				{required && <div className="required">*</div>}
			</div>
			<label
				className={`textInput-label ${icon && 'icon'}`}
				data-icon={icon && icon}
			>
				<input
					type={type}
					name={name}
					className={`textInput-input size-${size} border-radius-${radius}`}
					placeholder={placeholder}
					required={required}
					{...props}
				/>
			</label>
			<div className="textInput-error">{error}</div>
		</div>
	);
};
