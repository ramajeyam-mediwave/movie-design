//final
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { addMovie } from "../services/api";
import Form from "../components/MovieForm";
import { IMovieAdd } from "../type";
import { useState } from "react";
import Model from "../components/Model";

function AddForm() {
  const navigate = useNavigate();
  const movie = {
    title: "",
    year: undefined,
  };

  const [isMovieAdded, setIsMovieAdded] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);

  async function handleAddMovie(movie: IMovieAdd) {
    try {
      const moviePayload = {
        title: movie.title,
        year: movie.year,
      };
      const response = await addMovie(moviePayload);
      console.log(response);
      setIsMovieAdded(true);
      setAddError(null);
    } catch (error) {
      console.log("Errored");
      console.log(error);
      setAddError("Error adding the movie.");
    }
  }

  const closeAddSuccessDialog = () => {
    setIsMovieAdded(false);
    setAddError(null);
    navigate("/");
  };

  return (
    <>
      <Layout title="addForm">
        <h1>AddForm</h1>
        <Form handleAddMovie={handleAddMovie} emptyMovie={movie} />
      </Layout>

      <Model
        isOpen={isMovieAdded || addError !== null}
        onClose={closeAddSuccessDialog}
      >
        {addError ? addError : "Successfully added"}
      </Model>
    </>
  );
}

export default AddForm;