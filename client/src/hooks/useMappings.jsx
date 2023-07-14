import { useEffect, useState } from "react";
import { getMappings } from "../api/api";

export const useMappings = () => {
  const [mappings, setMappings] = useState(null);

  useEffect(() => {
    getMappings()
      .then((response) => setMappings(response))
      .catch((error) => console.log(error));
  }, []);

  return mappings;
};
