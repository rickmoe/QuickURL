import { useEffect, useState } from "react";
import { getMappings } from "../api/api";

const Home = () => {
  const [mappings, setMappings] = useState([]);

  useEffect(() => {
    getMappings()
      .then((response) => setMappings(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>QuickURL</h1>
      <p>Link shortening made easy</p>
      {mappings.length === 0 && <p>Loading...</p>}
      <ul>
        {mappings.length !== 0 &&
          mappings.map((map) => (
            <li key={map._id}>
              {map._id} --- {map.url}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
