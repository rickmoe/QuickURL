import { useState } from "react";
import { useAlert } from "../hooks/useAlert";
import { useMappings } from "../hooks/useMappings";
import TableRow from "./TableRow";
import "./URLTable.css";

const URLTable = () => {
  const {
    mappingData,
    status,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    deleteMappingMutation,
  } = useMappings();
  const { createAnimatedTimedAlert } = useAlert();
  const [focusedId, setFocusedId] = useState("");

  const onCopy = () => createAnimatedTimedAlert({ message: "Copied" });

  const onDelete = (event, id) => {
    event.preventDefault();
    deleteMappingMutation.mutate(
      { id, password: event.target?.password?.value },
      {
        onSuccess: () => {
          setFocusedId("");
          createAnimatedTimedAlert({
            type: "success",
            message: "Link Deleted",
          });
        },
        onError: (error) => {
          if (error.response.status === 400) {
            setFocusedId(id);
            createAnimatedTimedAlert({
              type: "error",
              message: "Password Required",
            });
          }
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
        (mappingData.pages[0].remaining === 0 &&
        mappingData.pages[0].mappings.length === 0 ? (
          <h4>No links found. Try adding one!</h4>
        ) : (
          <>
            <table>
              <colgroup>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
              </colgroup>
              <thead>
                <tr id="table-head">
                  <th>ID</th>
                  <th>URL</th>
                  <th style={{ width: "3rem" }}>Copy</th>
                  <th style={{ width: "3rem" }}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {mappingData.pages.map((page) =>
                  page.mappings.map(({ _id, url, pinned }) => (
                    <TableRow
                      key={_id}
                      _id={_id}
                      url={url}
                      pinned={pinned}
                      focused={focusedId === _id}
                      onCopy={onCopy}
                      onDelete={(event) => onDelete(event, _id)}
                    />
                  ))
                )}
              </tbody>
            </table>
            <p>
              {hasNextPage && (
                <button
                  className="table-load-button"
                  onClick={fetchNextPage}
                  disabled={isFetching}
                >
                  {isFetchingNextPage
                    ? "Fetching"
                    : `Show More (${
                        mappingData.pages.slice(-1)[0].remaining
                      } Links Remaining)`}
                </button>
              )}
            </p>
          </>
        ))}
    </>
  );
};

export default URLTable;
