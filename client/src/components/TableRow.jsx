import { CopyToClipboard } from "react-copy-to-clipboard";
import PasswordInput from "./PasswordInput";
import copyIcon from "../assets/copy.svg";
import trashIcon from "../assets/trash.svg";
import pinIcon from "../assets/pin.png";

const TableRow = ({ _id, url, pinned, focused, onCopy, onDelete }) => {
  return (
    <tr key={_id}>
      <td>
        {pinned && <img src={pinIcon} className="pin" />}
        {_id}
      </td>
      <td>
        <a target="_blank" href={url}>
          {url}
        </a>
      </td>
      <td>
        <CopyToClipboard text={`localhost:3000/${_id}`} onCopy={onCopy}>
          <img src={copyIcon} className="copy icon" />
        </CopyToClipboard>
      </td>
      <td>
        <form
          className={"delete-form"}
          onSubmit={(event) => onDelete(event, _id)}
        >
          <input type="image" src={trashIcon} className="trash icon" />
          {focused && (
            <PasswordInput
              id="delete-password"
              name="password"
              divClass="delete"
              autoFocus
            />
          )}
        </form>
      </td>
    </tr>
  );
};

export default TableRow;
