import { useMappings } from "../hooks/useMappings";
import URLForm from "../components/URLForm";
import URLTable from "../components/URLTable";

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
      <h1>QuickURL: Shrink Your Links </h1>
      <p>Tiny links have never been so accessible</p>
      <URLForm onSubmit={handleSubmit} />
      <URLTable />
    </>
  );
};

export default Home;
