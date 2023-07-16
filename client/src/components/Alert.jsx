const Alert = ({ message, className = "info", ...props }) => {
  return (
    <div className={"alert " + className} {...props}>
      {message}
    </div>
  );
};

export default Alert;
