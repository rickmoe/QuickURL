import { postURL } from "../api/api";
import URLForm from "../components/URLForm";
import URLTable from "../components/URLTable";

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.url.value);
    postURL(event.target.url.value).then((response) => console.log(response));
  };

  return (
    <>
      <h1>Link Shortening Tool</h1>
      <p>Link shortening made easy</p>
      <URLForm onSubmit={handleSubmit} />
      <URLTable />
    </>
  );
};

export default Home;
