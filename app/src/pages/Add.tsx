import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { addMovie } from "../services/api";
import Layout from "../components/layout";

function Add() {
  const navigate = useNavigate();

  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");

  async function addThisDummyMovie() {
    try {
      const moviePayload = {
        title: movieTitle,
        year: parseInt(movieYear),
      };
      const response = await addMovie(moviePayload);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log("Errored");
      console.log(error);
    }
  }

  return (
    <>
      <Layout title="addform">
        <h1>Add</h1>
        <form>
          <label>Enter Movie Name</label>
          <input
            type="text"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
          <label>Enter Movie Year</label>
          <input
            type="number"
            value={movieYear}
            onChange={(e) => setMovieYear(e.target.value)}
          />
        </form>

        <button onClick={addThisDummyMovie}>Add Dummy Movie</button>

        <Link to="/">
          <button>Submit</button>
        </Link>
      </Layout>
    </>
  );
}

export default Add;
