import { useState } from "react";
import LabeledInput from "./LabeledInput";

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
        src={"/src/assets/pwd-" + (showPassword ? "show" : "hide") + ".png"}
        alt="password show icon"
      />
    </LabeledInput>
  );
};

export default PasswordInput;
