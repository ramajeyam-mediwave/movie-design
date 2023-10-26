import { Link } from "react-router-dom";

function Add() {
  return (
    <>
      <h1>Add</h1>
      <form>
        <label>Enter Movie Name</label>
        <input type="text"></input>
        <label>Enter Movie Year</label>
        <input type="text"></input>
      </form>

      <Link to="/">
        <button>Submit</button>
      </Link>
    </>
  );
}

export default Add;
