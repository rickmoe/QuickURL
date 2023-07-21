import URLForm from "../components/URLForm";
import URLTable from "../components/URLTable";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <section className="title-section">
        <h1>QuickURL</h1>
        <h2>Shrink your links</h2>
      </section>
      <section className="form-section">
        <URLForm />
      </section>
      <section className="table-section">
        <URLTable />
      </section>
    </section>
  );
};

export default Home;
