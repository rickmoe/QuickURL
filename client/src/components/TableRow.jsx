import { CopyToClipboard } from "react-copy-to-clipboard";
import PasswordInput from "./PasswordInput";
import copyIcon from "../assets/copy.svg";
import trashIcon from "../assets/trash.svg";
import pinIcon from "../assets/pin.png";

const TableRow = ({ _id, url, pinned, focused, onCopy, onDelete }) => {
  return (
    <tr role="row" key={_id}>
      <td role="rowheader" data-cell="ID" className="id">
        {pinned && <img src={pinIcon} className="pin" alt="pinned icon" />}
        {_id}
      </td>
      <td role="cell" data-cell="URL" className="url">
        <a target="_blank" href={url}>
          {url}
        </a>
      </td>
      <td role="cell" data-cell="Copy" className="copy">
        <CopyToClipboard
          text={`https://quick-url.netlify.app/${_id}`}
          onCopy={onCopy}
        >
          <img src={copyIcon} className="copy icon" alt="copy icon" />
        </CopyToClipboard>
      </td>
      <td role="cell" data-cell="Delete" className="delete">
        <form
          className={"delete form"}
          onSubmit={(event) => onDelete(event, _id)}
        >
          <input
            type="image"
            src={trashIcon}
            className="trash icon"
            alt="delete icon"
          />
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
