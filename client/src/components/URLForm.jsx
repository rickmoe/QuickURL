import { useState } from "react";
import PasswordInput from "./PasswordInput";

const URLForm = ({ onSubmit }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const toggleAdvanced = () => setShowAdvanced((prev) => !prev);

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="url">Link</label>
      <input type="url" id="url" name="url" required />
      <label htmlFor="password" className={showAdvanced ? "" : "hide"}>
        Secure with a password
      </label>
      <PasswordInput
        id="password"
        name="password"
        disabled={!showAdvanced}
        className={showAdvanced ? "" : "hide"}
      />
      <button type="button" onClick={toggleAdvanced}>
        Show Advanced
      </button>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default URLForm;
