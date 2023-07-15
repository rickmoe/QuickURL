import SearchBar from "./SearchBar";
import "./Navbar.css";

const Navbar = (hasSearchBar) => {
  return (
    <nav>
      <h1>
        Quick<span className="emphasize">URL</span>
      </h1>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
