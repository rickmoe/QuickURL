import React from "react";

const URLForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="url">Link</label>
      <input type="url" id="url" name="url" required />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default URLForm;
