import { CopyToClipboard } from "react-copy-to-clipboard";
import PasswordInput from "./PasswordInput";
import copyIcon from "../assets/copy.svg";
import trashIcon from "../assets/trash.svg";
import pinIcon from "../assets/pin.svg";

const truncate = (string, maxLength) => {
  if (string.length <= maxLength) return string;
  return string.substring(0, maxLength - 3) + "...";
};

const TableRow = ({ _id, url, pinned, focused, onCopy, onSubmit }) => {
  return (
    <tr key={_id}>
      <td>
        {pinned && <img src={pinIcon} className="icon" />}
        {_id}
      </td>
      <td>
        <a target="_blank" href={url}>
          {truncate(url, 30)}
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
          onSubmit={(event) => onSubmit(event, _id)}
        >
          <input type="image" src={trashIcon} className="trash icon" />
          {focused && (
            <PasswordInput
              divClass="delete-div"
              className="delete-password"
              buttonClass="delete-password-show"
              name="password"
              autoFocus
            />
          )}
        </form>
      </td>
    </tr>
  );
};

export default TableRow;
