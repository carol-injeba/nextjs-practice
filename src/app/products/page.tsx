import { Suspense } from "react";
import ProductDetails from "./ProductDetails";
import ProductReviews from "./ProductReviews";

export default async function ProductsPage() {
  const response = await fetch("https://fakestoreapi.com/products"); // TODO to move to api route
  const data = await response.json();
  return (
    <div>
      <h1>Products</h1>
      <p>Welcome to the products page!</p>
      {data.map((product: any) => (
        <ul key={product.id}>
          <li>{product.title}</li>
          <ProductDetails product={product} />
          <Suspense
            fallback={<div className="loading">⏳ Loading reviews...</div>}
          >
            <ProductReviews productId={product.id} rating={product.rating} />
          </Suspense>
        </ul>
      ))}
    </div>
  );
}
