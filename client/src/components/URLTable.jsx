import { CopyToClipboard } from "react-copy-to-clipboard";
import { useAlert } from "../hooks/useAlert";
import { useMappings } from "../hooks/useMappings";
import { useSelector } from "react-redux";

const URLTable = ({ onDelete }) => {
  const { mappings, status } = useMappings();
  const { createTimedAlert } = useAlert();
  const searchText = useSelector((state) => state.search);

  const truncate = (string, maxLength) => {
    if (string.length <= maxLength) return string;
    return string.substring(0, maxLength - 3) + "...";
  };

  const onCopy = () => {
    createTimedAlert({
      message: "Copied!",
      className: "info",
      duration: "1000",
    });
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
      {/*<h1>{searchText}</h1>*/}
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
          {mappings
            .filter((mapping) => {
              return (
                mapping._id.search(searchText) >= 0 ||
                mapping.url.search(searchText) >= 0
              );
            })
            .map((mapping) => (
              <tr key={mapping._id}>
                <td>{mapping._id}</td>
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
                  <button onClick={() => onDelete(mapping._id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default URLTable;
