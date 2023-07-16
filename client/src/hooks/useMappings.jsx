import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getMappings, deleteMapping, postMapping } from "../api/api";

export const useMappings = () => {
  const QueryClient = useQueryClient();
  const searchText = useSelector((state) => state.search);

  const {
    status,
    isFetching,
    error,
    data: mappings,
  } = useQuery(["mappings"], getMappings);

  const filteredMappings =
    status === "success"
      ? mappings.filter(
          (mapping) =>
            mapping._id.toLowerCase().includes(searchText) ||
            mapping.url.toLowerCase().includes(searchText)
        )
      : [];

  const postMappingMutation = useMutation(postMapping, {
    onSuccess: () => {
      // Force refetch of mappings
      QueryClient.invalidateQueries(["mappings"]);
    },
  });

  const deleteMappingMutation = useMutation(deleteMapping, {
    onSuccess: () => {
      // Force refetch of mappings
      QueryClient.invalidateQueries(["mappings"]);
    },
  });

  return {
    mappings: filteredMappings,
    status,
    isFetching,
    error,
    postMappingMutation,
    deleteMappingMutation,
  };
};
