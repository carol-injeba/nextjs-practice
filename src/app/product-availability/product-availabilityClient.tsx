"use client";

import { use } from "react";
import { Availability } from "../lib/product-availability";

type Props = {
  availabilityPromise: Promise<Availability[]>;
};

export default function AvailabilityClient({ availabilityPromise }: Props) {
  // React.use() reads the promise value (suspends until resolved)
  const availability = use(availabilityPromise);

  return (
    <section style={{ marginTop: 16 }}>
      <h2>Resolved Availability</h2>
      <ul>
        {availability.map((a) => (
          <li key={a.productId}>
            Product {a.productId}:{" "}
            {a.inStock ? `In Stock (${a.qty} left)` : "Out of Stock"}
          </li>
        ))}
      </ul>
    </section>
  );
}
``;
