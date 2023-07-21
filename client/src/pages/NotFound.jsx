import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = ({ path = "" }) => {
  return (
    <section className="not-found">
      <h1>Page Not Found</h1>
      <h2>
        Sorry, we could not find a URL linked to the path{" "}
        {path !== "" ? <b>{path}</b> : "given"}
      </h2>
      <Link to="/" className="button">
        Return Home
      </Link>
    </section>
  );
};

export default NotFound;
