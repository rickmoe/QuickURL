import { useEffect, useState } from "react";
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
    postMappingMutation.mutate(mapping);
  };

  useEffect(() => {
    if (postMappingMutation.status !== "success") return;
    if (typeof postMappingMutation.data?._id !== "string") return;
    createAnimatedTimedAlert({
      message: `Link Created! Go to localhost:3000/${postMappingMutation.data._id}`,
      type: "success",
      duration: 8000,
    });
  }, [postMappingMutation.status]);

  return (
    <>
      <p className="form-title">Tiny links have never been so accessible</p>
      <form onSubmit={handleSubmit}>
        <LabeledInput label="Link" id="url" name="url" type="url" required />
        <PasswordInput
          label="Password"
          id="password"
          name="password"
          disabled={!showAdvanced}
          divClass={showAdvanced ? "" : "hide"}
        />
        <div className="button-row">
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
