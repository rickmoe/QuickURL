import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getURL } from "../api/api";

export const useRedirect = (id) => {
  const {
    status,
    isFetching,
    error,
    data: url,
  } = useQuery(["mappings", id], () => getURL(id));

  useEffect(() => {
    if (url) {
      window.location.replace(url);
    }
  }, [url]);

  return { status, error, isFetching };
};
