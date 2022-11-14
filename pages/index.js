import Head from "next/head";
import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import Requests from "../utils/Requests";

const Home = ({ movies }) => {
  return (
    <div>
      <Head>
        <title>Learnig Nextjs with Firebase</title>
      </Head>

      <main className="bg-black/80 min-h-screen">
        <Header />
        <MoviesList movies={movies} />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  let movieGenre = context.query.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${Requests[movieGenre].url}`
  );
  const data = await res.json();

  return {
    props: {
      movies: data.results,
    },
  };
};
