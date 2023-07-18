import { useMappings } from "../hooks/useMappings";
import URLForm from "../components/URLForm";
import URLTable from "../components/URLTable";
import "./Home.css";

const Home = () => {
  const { postMappingMutation } = useMappings();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.password);
    let mapping = { url: event.target.url.value };
    if (event.target.password?.value && !event.target.password?.disabled) {
      mapping.password = event.target.password.value;
    }
    postMappingMutation.mutate(mapping);
  };

  return (
    <>
      <div className="title-div">
        <h1>QuickURL</h1>
        <h2>Shrink your links</h2>
      </div>
      <div className="form-div">
        <p>Tiny links have never been so accessible</p>
        <URLForm onSubmit={handleSubmit} />
      </div>
      <URLTable />
    </>
  );
};

export default Home;
