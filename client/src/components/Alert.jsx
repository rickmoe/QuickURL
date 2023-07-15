const Alert = ({ message, className = "success", ...props }) => {
  return (
    <div className={"alert " + className} {...props}>
      {message}
    </div>
  );
};

export default Alert;
