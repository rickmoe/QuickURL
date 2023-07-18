import SearchBar from "./SearchBar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h1>
        Quick<b>URL</b>
      </h1>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
