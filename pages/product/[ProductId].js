import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import Image from "next/image";

const ProductDetails = () => {
  const router = useRouter();
  const { ProductId } = router.query;
  const product = data.products.find((x) => x.id === Number(ProductId));

  if (!product) {
    return <div>Product {ProductId} Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">
          <a className="px-32">back to products</a>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-32 px-32 gap-6">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
            </div>
            <button className="primary-button w-full">Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
