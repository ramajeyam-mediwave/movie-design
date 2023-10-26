import { Link } from "react-router-dom";

function Edit() {
  return (
    <>
      <h1>Edit Form</h1>
      <form>
        <label>Enter Alter Name</label>
        <input type="text"></input>
        <label>Enter Alter Year</label>
        <input type="text"></input>
      </form>

      <Link to="/">
        <button>save </button>
      </Link>
    </>
  );
}

export default Edit;
