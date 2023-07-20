import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getMappings, deleteMapping, postMapping } from "../api/api";

export const useMappings = (pageSize = 4) => {
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

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useSelector } from "react-redux";
// import { getMappings, deleteMapping, postMapping } from "../api/api";
// import { useState, useEffect } from "react";

// export const useMappings = (page) => {
//   const QueryClient = useQueryClient();
//   const searchText = useSelector((state) => state.search);
//   const [mappings, setMappings] = useState([]);
//   // const [remaining, setRemaining] = useState(-1);
//   // let status;
//   // let isFetching;
//   // let error;
//   // let fetchData;

//   // // useEffect(() => {
//   // //   getMappings(20);
//   // //   setMappings([]);
//   // //   setRemaining(-1);
//   // //   getNextMappings(20);
//   // // }, [searchText, page]);

//   // // ({
//   // //   status,
//   // //   isFetching,
//   // //   error,
//   // //   data: fetchData,
//   // // } = useQuery(
//   // //   ["mappings", { page: 1, pageSize: 4, search: searchText }],
//   // //   getMappings
//   // // ));

//   // // const getNextMappings = async (pageSize) => {};

//   // // useEffect(() => {
//   // //   if (isFetching === false || status !== "success") return;
//   // //   setMappings((prev) => [...prev, fetchData.mappings]);
//   // //   setRemaining(fetchData.remaining);
//   // // }, [isFetching]);

//   const postMappingMutation = useMutation(postMapping, {
//     onSuccess: () => {
//       // Force refetch of mappings
//       setMappings([]);
//       QueryClient.invalidateQueries(["mappings"]);
//     },
//   });

//   const deleteMappingMutation = useMutation(deleteMapping, {
//     onSuccess: () => {
//       // Force refetch of mappings
//       setMappings([]);
//       QueryClient.invalidateQueries(["mappings"]);
//     },
//   });

//   return {
//     mappings,
//     remaining,
//     status,
//     isFetching,
//     error,
//     postMappingMutation,
//     deleteMappingMutation,
//   };
// };
