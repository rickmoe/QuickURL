import { Link } from "react-router-dom";

const NotFound = ({ path = "" }) => {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>
        Sorry, we could not find a URL linked to the path{" "}
        {path !== "" ? <span className="emphasize">{path}</span> : "given"}
      </p>
      <Link to="/">Return Home</Link>
    </>
  );
};

export default NotFound;
