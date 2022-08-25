import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";

const Home = () => {
  return (
    <Layout title="HomePage">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 mb-10">
        {data.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
