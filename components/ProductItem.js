import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <a className="">
          <img
            src={product.image}
            alt="ProductImage"
            className="shadow h-96 w-full hover:scale-105 transition ease-in-out overflow-hidden"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center p-5 justify-center">
        <Link href={`/product/${product.id}`}>
          <a>{product.name}</a>
        </Link>
        <h3>{product.brand}</h3>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
