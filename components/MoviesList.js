import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 gap-6 mx-5 py-20 lg:max-w-5xl lg:mx-auto sm:grid-cols-2 md:grid-cols-3">
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MoviesList;
