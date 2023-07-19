import { useState } from "react";
import LabeledInput from "./LabeledInput";
import PasswordInput from "./PasswordInput";
import "./URLForm.css";

const URLForm = ({ onSubmit }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const toggleAdvanced = () => setShowAdvanced((prev) => !prev);

  return (
    <>
      <p className="form-title">Tiny links have never been so accessible</p>
      <form onSubmit={onSubmit}>
        <LabeledInput label="Link" id="url" name="url" type="url" required />
        <PasswordInput
          label="Password"
          id="password"
          name="password"
          disabled={!showAdvanced}
          divClass={showAdvanced ? "" : "hide"}
        />
        <div class="button-row">
          <input
            type="button"
            onClick={toggleAdvanced}
            value="Advanced"
          ></input>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default URLForm;
