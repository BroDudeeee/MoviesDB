import { getProviders, signOut } from "next-auth/react";
import Head from "next/head";

const Home = ({ providers }) => {
  return (
    <div>
      <Head>
        <title>Linkedin</title>
      </Head>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signOut(provider.id, { callbackUrl: "/home" })}
          >
            Sign Out
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
