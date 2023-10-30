//final
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies, deleteMovie } from "../services/api";
import "@picocss/pico";
import Layout from "../components/layout";
import { IMovie } from "../type";
import DeleteDialog from "../components/DeleteDialog";
import LoadingIcon from "../components/Loading/LoadingIcon";

interface IHome {
  handleEdit: (movie: IMovie) => void;
}

const Home: React.FC<IHome> = ({ handleEdit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isMovieDeleted, setIsMovieDeleted] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  useEffect(() => {
    async function getMoviesFromAPI() {
      setIsLoading(true);
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setDeleteError("Network error");
        setIsMovieDeleted(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesFromAPI();
  }, [refresh]);

  async function handleDeleteMovie(id: number) {
    try {
      await deleteMovie(id);
      setIsMovieDeleted(true);
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error("Error deleting movie:", error);
      setDeleteError("Error deleting the movie.");
    }
  }

  const closeDeleteDialog = () => {
    setIsMovieDeleted(false);
    setDeleteError(null);
  };

  return (
    <>
      <Layout title="home">
        <h1>Home</h1>

        <div className="container">
          <Link to="/add" role="button" className="secondary">
            +
          </Link>
          <button
            disabled={isLoading}
            onClick={() => setRefresh((prev) => !prev)}
          >
            {isLoading ? <LoadingIcon /> : <>refresh list</>}
          </button>
          {isLoading ? (
            <p>Loading movies!</p>
          ) : (
            <div className="grid">
              {movies.map((m) => (
                <article key={m.id}>
                  <h1>{m.title}</h1>
                  <h1>{m.year}</h1>

                  <Link to={`/edit/${m.id}`} className="pico-link">
                    <button onClick={() => handleEdit(m)}>Edit</button>
                  </Link>
                  <button
                    disabled={isLoading}
                    onClick={() => handleDeleteMovie(m.id)}
                    className="pico-link"
                  >
                    {isLoading ? <LoadingIcon /> : <>Delete</>}
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </Layout>

      <DeleteDialog
        isOpen={isMovieDeleted || deleteError !== null}
        onClose={closeDeleteDialog}
      >
        {deleteError ? deleteError : "Successfully deleted"}
      </DeleteDialog>
    </>
  );
};

export default Home;
