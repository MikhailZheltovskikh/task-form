import './radioInput.scss';

export const RadioInput = (dependence) => {
	const { label, size, required, type, error, name, options, ...props } = dependence;

	return (
		<div className={`textInput size-${size}`}>
			<label className="textInput-label">{label}</label>
			{required && <span className="required">*</span>}

			{options.map((option, index) => (
				<div className="option-item" key={index}>
					<input
						id={`radio-${index}`}
						type={type}
						name={name}
						className={`radio-input`}
						value={option.value}
						{...props}
					/>
					<label htmlFor={`radio-${index}`} className={`radio-lable`}>
						{option.label}
					</label>
				</div>
			))}

			<div className="textInput-error">{error}</div>
		</div>
	);
};
