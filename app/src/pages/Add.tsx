import { Link, useNavigate } from "react-router-dom";

import { addMovie } from "../services/api";

function Add() {
  const navigate = useNavigate();

  async function addThisDummyMovie() {
    try {
      const moviePayload = {
        title: "My dummy movie",
        year: 1998,
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
      <h1>Add</h1>
      <form>
        <label>Enter Movie Name</label>
        <input type="text"></input>
        <label>Enter Movie Year</label>
        <input type="text"></input>
      </form>

      <button onClick={() => addThisDummyMovie()}>add dummy movie</button>

      <Link to="/">
        <button>Submit</button>
      </Link>
    </>
  );
}

export default Add;
