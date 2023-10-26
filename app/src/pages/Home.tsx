import { Link } from "react-router-dom";
import "@picocss/pico";
function Home() {
  return (
    <>
      <h1 className="pico-text-3xl">Home</h1>

      <article>
        <header>Header</header>
        <main>Body</main>
        <footer>Footer</footer>
      </article>

      <Link to="/add" className="pico-link">
        <button>Add</button>
      </Link>

      <Link to="/edit" className="pico-link">
        <button>Edit</button>
      </Link>
    </>
  );
}

export default Home;
