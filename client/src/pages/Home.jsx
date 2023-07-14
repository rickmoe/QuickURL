import { deleteMapping, postURL } from "../api/api";
import URLForm from "../components/URLForm";
import URLTable from "../components/URLTable";

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    postURL(event.target.url.value).then((response) =>
      console.log("Fix me post", response)
    );
  };

  const handleDelete = (id) => {
    deleteMapping(id).then((response) =>
      console.log("Fix me delete", response)
    );
  };

  return (
    <>
      <h1>Link Shortening Tool</h1>
      <p>Link shortening made easy</p>
      <URLForm onSubmit={handleSubmit} />
      <URLTable onDelete={handleDelete} />
    </>
  );
};

export default Home;
