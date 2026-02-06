import { JSX } from "react";

export default async function ProductReviews({
  productId,
  rating,
}: {
  productId: string;
  rating?: { rate: number; count: number };
}): Promise<JSX.Element> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="reviews">
      <h4>⭐ Product Reviews</h4>
      <p>Rating: {rating?.rate} / 5</p>
      <p>Review Count: {rating?.count}</p>
    </div>
  );
}
