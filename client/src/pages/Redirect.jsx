import { useLocation } from "react-router-dom";
import { useRedirect } from "../hooks/useRedirect";
import NotFound from "./NotFound";

const Redirect = () => {
  const path = useLocation().pathname;
  const { status } = useRedirect(path.substring(1));

  if (status === "loading") return <h1>Loading...</h1>;
  else if (status === "error") {
    return <NotFound path={path} />;
  }
  return null;
};

export default Redirect;
