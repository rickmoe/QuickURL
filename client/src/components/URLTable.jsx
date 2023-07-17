import { useState } from "react";
import { useAlert } from "../hooks/useAlert";
import { useMappings } from "../hooks/useMappings";
import TableRow from "./TableRow";

const URLTable = () => {
  const { mappings, status, deleteMappingMutation } = useMappings();
  const { createTimedAlert } = useAlert();
  const [focusedId, setFocusedId] = useState("");

  const onCopy = () => createTimedAlert({ message: "Copied!" });

  const onSubmit = (event, id) => {
    event.preventDefault();
    deleteMappingMutation.mutate(
      { id, password: event.target?.password?.value },
      {
        onSuccess: () => setFocusedId(""),
        onError: (error) => {
          if (error.response.status === 400) setFocusedId(id);
        },
      }
    );
    event.target.reset();
  };

  return (
    <>
      {status === "loading" && <h4>Loading...</h4>}
      {status === "error" && <h4>Error encountered while loading mappings</h4>}
      {status === "success" &&
        (mappings.length === 0 ? (
          <h4>No links found. Try adding one!</h4>
        ) : (
          <table>
            <thead>
              <tr id="table-head">
                <th>ID</th>
                <th>URL</th>
                <th style={{ width: "3rem" }}>Copy</th>
                <th style={{ width: "3rem" }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {mappings.map(({ _id, url, pinned }) => (
                <TableRow
                  key={_id}
                  _id={_id}
                  url={url}
                  pinned={pinned}
                  focused={focusedId === _id}
                  onCopy={onCopy}
                  onSubmit={(event) => onSubmit(event, _id)}
                />
              ))}
            </tbody>
          </table>
        ))}
    </>
  );
};

export default URLTable;
