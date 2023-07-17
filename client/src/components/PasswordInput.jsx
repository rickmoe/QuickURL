import { useState } from "react";

const PasswordInput = ({
  divClass = "",
  className = "",
  buttonClass = "",
  ...props
}) => {
  let [showPassword, setShowPassword] = useState(false);

  return (
    <div className={divClass}>
      <input
        type={showPassword ? "text" : "password"}
        className={"password " + className}
        {...props}
      />
      <img
        className={buttonClass}
        onClick={() => setShowPassword((prev) => !prev)}
        src={"/src/assets/pwd-" + (showPassword ? "show" : "hide") + ".png"}
      ></img>
    </div>
  );
};

export default PasswordInput;
