import { useState } from "react";
import LabeledInput from "./LabeledInput";
import pwdShowIcon from "../assets/pwd-show.png";
import pwdHideIcon from "../assets/pwd-hide.png";

const PasswordInput = ({ sharedClass = "", buttonClass = "", ...props }) => {
  let [showPassword, setShowPassword] = useState(false);

  return (
    <LabeledInput
      sharedClass={sharedClass}
      type={showPassword ? "text" : "password"}
      {...props}
    >
      <img
        className={`input-show ${sharedClass} ${buttonClass}`}
        onClick={() => setShowPassword((prev) => !prev)}
        src={showPassword ? pwdShowIcon : pwdHideIcon}
        alt="password show icon"
      />
    </LabeledInput>
  );
};

export default PasswordInput;
