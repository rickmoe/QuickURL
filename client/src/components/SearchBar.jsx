import { useDispatch } from "react-redux";
import { setSearch } from "../features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="search">Search By ID or URL</label>
      <input
        type="search"
        id="search"
        onChange={(event) => dispatch(setSearch(event.target.value))}
      />
    </>
  );
};

export default SearchBar;
