import "./StyledInput.css";

const LabeledInput = ({
  id,
  inputType = "text",
  label = "",
  placeholder = " ",
  sharedClass = "",
  divClass = "",
  labelClass = "",
  inputClass = "",
  children,
  ...props
}) => {
  return (
    <div className={`input-div ${sharedClass} ${divClass}`}>
      <input
        id={id}
        type={inputType}
        className={`input ${sharedClass} ${inputClass}`}
        placeholder={placeholder}
        {...props}
      />
      {label !== "" && (
        <label htmlFor={id} className={`input-label ${sharedClass}`}>
          {label}
        </label>
      )}
      {children}
      <div className={`underbar ${sharedClass}`} />
    </div>
  );
};

export default LabeledInput;
