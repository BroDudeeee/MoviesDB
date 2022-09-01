/* eslint-disable @next/next/no-img-element */
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";

const HomePage = ({ providers }) => {
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>Linkedin Login</title>
      </Head>
      <header className="flex items-center justify-around py-4">
        <div className="relative h-10 w-36 cursor-pointer">
          <img src="https://rb.gy/vtbzlp" alt="" />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex items-center space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink Icon={GroupIcon} text="People" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
          </div>
          <div className="pl-4">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="border border-blue-700 transition-all hover:border-2 ease-in-out rounded-full px-5 py-1.5 font-semibold text-blue-700"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            ))}
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center xl:flex-row max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 leading-snug pl-4 xl:pl-0 max-w-xl">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 xl:top-28 right-5">
          <img src="https://rb.gy/vkzpzt" alt="" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
