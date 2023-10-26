import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <div className="Home">
          <Link to="/">home</Link>
        </div>
        <div className="Add">
          <Link to="/Add">add</Link>
        </div>
        <div className="Add">
          <Link to="/Edit">add</Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
