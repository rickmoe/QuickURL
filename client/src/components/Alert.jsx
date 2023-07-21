import CopyToClipboard from "react-copy-to-clipboard";

const Alert = ({
  message = "",
  type = "info",
  className = "",
  copyText = "",
  ...props
}) => {
  let classes = `alert ${type} ${copyText !== ""} ${className}`;
  if (copyText !== "") classes += " copyable";
  const alert = (
    <div className={classes} {...props}>
      {message !== "" && <span>{message}</span>}
    </div>
  );

  if (copyText === "") return alert;
  return <CopyToClipboard text={copyText}>{alert}</CopyToClipboard>;
};

export default Alert;
