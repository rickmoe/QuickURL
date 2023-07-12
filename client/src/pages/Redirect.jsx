import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import { getURL } from "../api/api";

const Redirect = () => {
  const path = useLocation().pathname;
  const [url, setUrl] = useState("");

  useEffect(() => {
    getURL(path.slice(1)).then((response) => setUrl(response));
  }, []);

  if (url !== null && url !== "") {
    window.location.replace(url);
  }

  return (
    <>
      {url === "" && <h1>Fetching...</h1>}
      {url === null && <NotFound path={path} />}
    </>
  );
};

export default Redirect;
