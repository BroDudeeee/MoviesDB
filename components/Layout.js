import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title ? title + "-Commerce" : "MyCommerce"}</title>
      </Head>
      <nav className="flex flex-col justify-between min-h-screen">
        <header className="flex items-center justify-between shadow-md h-16 px-4">
          <Link href="/">
            <a className="text-2xl font-semibold">MeCommerce</a>
          </Link>
          <div className="flex space-x-4 text-lg font-semibold">
            <p>Cart</p>
            <p>Login</p>
          </div>
        </header>
        <main className="m-auto mt-4 ml-4">{children}</main>
        <footer className="flex items-center justify-center h-16 shadow-inner font-semibold">
          Copyright &copy; 2022 MeCommerce By Ahmed Morsy
        </footer>
      </nav>
    </div>
  );
};

export default Layout;
