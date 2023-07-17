import { useDispatch } from "react-redux";
import { setSearch } from "../features/searchSlice";
import LabeledInput from "./LabeledInput";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <LabeledInput
        label="Search"
        id="search"
        type="search"
        onChange={(event) =>
          dispatch(setSearch(event.target.value.toLowerCase()))
        }
        required
      />
    </>
  );
};

export default SearchBar;
