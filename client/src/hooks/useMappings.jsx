import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getMappings, deleteMapping, postMapping } from "../api/api";

export const useMappings = () => {
  const QueryClient = useQueryClient();

  const {
    status,
    isFetching,
    error,
    data: mappings,
  } = useQuery(["mappings"], getMappings);

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
    mappings,
    status,
    isFetching,
    error,
    postMappingMutation,
    deleteMappingMutation,
  };
};
