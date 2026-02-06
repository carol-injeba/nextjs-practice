"use client";
export default function ProductDetails({ product }: { product: any }) {
  const addWishlist = (id: string) => {
    console.log("Added to wishlist:", id);
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div onClick={() => addWishlist(product.id)}>Add to Wishlist</div>
    </div>
  );
}
