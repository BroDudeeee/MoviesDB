import Link from "next/link";
import Requests from "../utils/Requests";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-around shadow-md p-5 bg-black sticky top-0 z-50">
      <Link href="/">
        <h1 className="text-3xl font-bold cursor-pointer text-white">
          MovieDB
        </h1>
      </Link>
      <div className="flex items-center space-x-6">
        {Object.entries(Requests).map(([key, { title }]) => (
          <h3
            key={key}
            onClick={() => router.push(`?genre=${key}`)}
            className="text-xl font-semibold hover:underline underline-offset-4 cursor-pointer text-gray-50 hover:text-white"
          >
            {title}
          </h3>
        ))}
      </div>
    </header>
  );
};

export default Header;
