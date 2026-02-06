import { Suspense } from "react";
import ProductCarousel from "./ProductCarousel";

export default function FeaturedProductsPage() {
  return (
    <div>
      <h1>Featured Products</h1>
      <p>Check out our featured products!</p>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductCarousel />
      </Suspense>
    </div>
  );
}
