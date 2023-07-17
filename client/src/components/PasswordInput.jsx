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
      />
    </LabeledInput>
  );
};

export default PasswordInput;

// import { useState } from "react";
// import "./StyledInputs.css";

// const PasswordInput = ({
//   id,
//   label = "",
//   sharedClass = "",
//   divClass = "",
//   labelClass = "",
//   inputClass = "",
//   buttonClass = "",
//   ...props
// }) => {
//   let [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className={`input-div ${sharedClass} ${divClass}`}>
//       <input
//         id={id}
//         type={showPassword ? "text" : "password"}
//         className={`input ${sharedClass} ${inputClass}`}
//         placeholder=""
//         {...props}
//       />
//       {label !== "" && (
//         <label htmlFor={id} className={`input-label ${sharedClass}`}>
//           {label}
//         </label>
//       )}
//       <img
//         className={`input-show ${sharedClass} ${buttonClass}`}
//         onClick={() => setShowPassword((prev) => !prev)}
//         src={"/src/assets/pwd-" + (showPassword ? "show" : "hide") + ".png"}
//       />
//       <div class={`underbar ${sharedClass}`} />
//     </div>
//   );
// };

// export default PasswordInput;
