import { CopyToClipboard } from "react-copy-to-clipboard";
import { useMappings } from "../hooks/useMappings";

const URLTable = ({ onDelete }) => {
  const mappings = useMappings();

  const truncate = (string, maxLength) => {
    if (string.length <= maxLength) return string;
    return string.substring(0, maxLength - 3) + "...";
  };

  const onCopy = () => console.log("Copied!");

  if (mappings === null) return <h4>Loading...</h4>;
  if (mappings.length === 0) return <p>No Links Yet. Try adding one!</p>;
  return (
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
        {mappings.map((map) => (
          <tr key={map._id}>
            <td>{map._id}</td>
            <td>
              <a target="_blank" href={map.url}>
                {truncate(map.url, 30)}
              </a>
            </td>
            <td>
              <CopyToClipboard
                text={`localhost:3000/${map._id}`}
                onCopy={onCopy}
              >
                <button>Copy</button>
              </CopyToClipboard>
            </td>
            <td>
              <button onClick={() => onDelete(map._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default URLTable;
