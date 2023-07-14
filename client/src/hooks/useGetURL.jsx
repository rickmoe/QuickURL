import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getURL } from "../api/api";

export const useGetURL = () => {
  const path = useLocation().pathname;
  const [url, setUrl] = useState(undefined);

  useEffect(() => {
    getURL(path.slice(1)).then((response) => setUrl(response));
  }, []);

  useEffect(() => {
    if (url !== null && url !== undefined) {
      window.location.replace(url);
    }
  }, [url]);

  return [url, path];
};
