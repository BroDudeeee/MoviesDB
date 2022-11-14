/* eslint-disable @next/next/no-img-element */
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
const Movie = ({
  title,
  overview,
  vote_count,
  release_date,
  backdrop_path,
}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="pb-4 cursor-pointer group  hover:border border-gray-600 rounded-lg transition-all duration-300 ease-out space-y-5">
      <div className="overflow-hidden rounded-lg">
        <img
          src={`${BASE_URL}${backdrop_path}`}
          alt=""
          className="rounded-lg group-hover:scale-105 transition-all duration-300 ease-out "
          loading="lazy"
        />
      </div>
      <div className="text-white pl-5 pt-3 space-y-2">
        <p>{`${
          overview.length > 50 ? overview.slice(0, 50) + "..." : overview
        }`}</p>
        <h1 className="font-bold text-xl tracking-wider">{title}</h1>
        <div className=" text-blue-500 flex items-center justify-around">
          <p>{release_date}</p>
          <div className="flex items-center space-x-4">
            <HandThumbUpIcon className="h-6 w-6" />
            <span>{vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
