import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getMappings, deleteMapping, postMapping } from "../api/api";

export const useMappings = (pageSize = 20) => {
  const QueryClient = useQueryClient();
  const searchText = useSelector((state) => state.search);

  const {
    status,
    isFetching,
    error,
    data: mappingData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["mappings", { pageSize, search: searchText }],
    queryFn: getMappings,
    staleTime: 1000 * 60 * 5,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

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
    mappingData,
    status,
    isFetching,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    postMappingMutation,
    deleteMappingMutation,
  };
};
