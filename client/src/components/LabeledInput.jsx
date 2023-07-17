import "./StyledInputs.css";

const LabeledInput = ({
  id,
  inputType = "text",
  label = "",
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
        placeholder=""
        {...props}
      />
      {label !== "" && (
        <label htmlFor={id} className={`input-label ${sharedClass}`}>
          {label}
        </label>
      )}
      {children}
      <div class={`underbar ${sharedClass}`} />
    </div>
  );
};

export default LabeledInput;
