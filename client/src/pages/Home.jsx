import URLForm from "../components/URLForm";
import URLTable from "../components/URLTable";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="title-div">
        <h1>QuickURL</h1>
        <h2>Shrink your links</h2>
      </div>
      <div className="form-div">
        <URLForm />
      </div>
      <div className="table-div">
        <URLTable />
      </div>
    </section>
  );
};

export default Home;
