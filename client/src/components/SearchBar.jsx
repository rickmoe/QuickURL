import { useDispatch } from "react-redux";
import { setSearch } from "../features/searchSlice";
import LabeledInput from "./LabeledInput";

/* See https://www.freecodecamp.org/news/javascript-debounce-example/ */
const debounce = (callback, timeout = 400) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
};

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <LabeledInput
        label="Search"
        id="search"
        type="search"
        onChange={debounce((event) =>
          dispatch(setSearch(event.target.value.toLowerCase()))
        )}
        required
      />
    </>
  );
};

export default SearchBar;
