import { Suspense, lazy } from "react";
import { useGetURL } from "../hooks/useGetURL";
const NotFound = lazy(() => import("./NotFound"));

const Redirect = () => {
  const [url, path] = useGetURL();

  if (url === undefined) return <h1>Fetching...</h1>;
  else if (url !== null) return null;
  return (
    <Suspense fallback={<h2>Loading</h2>}>
      <NotFound path={path} />
    </Suspense>
  );
};

export default Redirect;
