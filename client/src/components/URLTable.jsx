import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useAlert } from "../hooks/useAlert";
import { useMappings } from "../hooks/useMappings";

const URLTable = () => {
  const { mappings, status, deleteMappingMutation } = useMappings();
  const { createTimedAlert } = useAlert();
  const [password, setPassword] = useState("");
  const [focusedId, setFocusedId] = useState("");

  const truncate = (string, maxLength) => {
    if (string.length <= maxLength) return string;
    return string.substring(0, maxLength - 3) + "...";
  };

  const onCopy = () => createTimedAlert({ message: "Copied!" });

  const onDelete = (id, password) => {
    deleteMappingMutation.mutate(
      { id, password },
      {
        onSuccess: () => {
          setFocusedId("");
        },
        onError: (error) => {
          if (error.response.status === 400) setFocusedId(id);
        },
      }
    );
  };

  if (status === "loading") return <h4>Loading...</h4>;
  if (status === "error") {
    return <h4>Error encountered while loading mappings</h4>;
  }
  if (mappings.length === 0) {
    return <p>No links found. Try adding one!</p>;
  }
  return (
    <>
      <table>
        <thead>
          <tr id="table-head">
            <th>ID</th>
            <th>URL</th>
            <th>Copy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {mappings.map((mapping) => (
            <tr key={mapping._id}>
              <td>
                {mapping?.pinned === true ? "📌" : ""}
                {mapping._id}
              </td>
              <td>
                <a target="_blank" href={mapping.url}>
                  {truncate(mapping.url, 30)}
                </a>
              </td>
              <td>
                <CopyToClipboard
                  text={`localhost:3000/${mapping._id}`}
                  onCopy={onCopy}
                >
                  <button>Copy</button>
                </CopyToClipboard>
              </td>
              <td>
                <form
                  className={"delete-form"}
                  onSubmit={(event) => {
                    event.preventDefault();
                    onDelete(
                      mapping._id,
                      focusedId === mapping._id ? password : null
                    );
                    setPassword("");
                  }}
                >
                  <button>Delete</button>
                  <input
                    type="password"
                    className={
                      "delete-password" +
                      (focusedId === mapping._id ? "" : " hide")
                    }
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default URLTable;
