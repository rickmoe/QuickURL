import { useState } from "react";
import LabeledInput from "./LabeledInput";
import PasswordInput from "./PasswordInput";

const URLForm = ({ onSubmit }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const toggleAdvanced = () => setShowAdvanced((prev) => !prev);

  return (
    <form onSubmit={onSubmit}>
      <LabeledInput label="Link" id="url" name="url" type="url" required />
      <PasswordInput
        label="Password"
        id="password"
        name="password"
        disabled={!showAdvanced}
        divClass={showAdvanced ? "" : "hide"}
      />
      <button type="button" onClick={toggleAdvanced}>
        Show Advanced
      </button>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default URLForm;
