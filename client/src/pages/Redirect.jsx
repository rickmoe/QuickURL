import { useGetURL } from "../hooks/useGetURL";
import NotFound from "./NotFound";

const Redirect = () => {
  const [url, path] = useGetURL();

  if (url === undefined) return <h1>Fetching...</h1>;
  else if (url === null) return <NotFound path={path} />;
  return null;
};

export default Redirect;
