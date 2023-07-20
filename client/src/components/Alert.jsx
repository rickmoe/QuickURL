const Alert = ({ message, type = "info", className = "", ...props }) => {
  return (
    <div className={`alert ${type} ${className}`} {...props}>
      {message}
    </div>
  );
};

export default Alert;
