import { useState } from "react";
import { useMappings } from "../hooks/useMappings";
import { useAlert } from "../hooks/useAlert";
import LabeledInput from "./LabeledInput";
import PasswordInput from "./PasswordInput";
import "./URLForm.css";

const URLForm = () => {
  const { createAnimatedTimedAlert } = useAlert();
  const { postMappingMutation } = useMappings();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const toggleAdvanced = () => setShowAdvanced((prev) => !prev);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let mapping = { url: event.target.url.value };
    if (event.target.password?.value && !event.target.password?.disabled) {
      mapping.password = event.target.password.value;
    }

    postMappingMutation.mutate(mapping, {
      onSuccess: (data) => {
        createAnimatedTimedAlert({
          type: "success",
          message: "Link Created! Click here to copy your link",
          copyText: `https://quick-url.netlify.app/${data._id}`,
          duration: 5000,
        });
      },
    });
  };

  return (
    <>
      <p className="form-title">Tiny links have never been so accessible</p>
      <form className="form" onSubmit={handleSubmit}>
        <LabeledInput label="Link" id="url" name="url" type="url" required />
        <PasswordInput
          label="Password"
          id="password"
          name="password"
          disabled={!showAdvanced}
          divClass={showAdvanced ? "" : "hide"}
        />
        <div className="button-row">
          <input type="button" onClick={toggleAdvanced} value="Advanced" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default URLForm;
