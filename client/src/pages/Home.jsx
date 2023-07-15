import { useState } from "react";
import { useMappings } from "../hooks/useMappings";
import URLForm from "../components/URLForm";
import URLTable from "../components/URLTable";

const Home = () => {
  const { postMappingMutation, deleteMappingMutation } = useMappings();

  const handleSubmit = (event) => {
    event.preventDefault();
    postMappingMutation.mutate(event.target.url.value);
  };

  const handleDelete = (id) => {
    deleteMappingMutation.mutate(id);
  };

  return (
    <>
      <h1>QuickURL: Shrink Your Links </h1>
      <p>Short links have never been so accessible</p>
      <URLForm onSubmit={handleSubmit} />
      <URLTable onDelete={handleDelete} />
    </>
  );
};

export default Home;
