import { fakeDB, Product } from "./data";

interface Props {
  selectedCategory: string;
}

// Server Component
export default async function CategoryProducts({ selectedCategory }: Props) {
  // Simulate server data filtering
  const products: Product[] = fakeDB.filter(
    (item) => item.category.toLowerCase() === selectedCategory.toLowerCase(),
  );

  await new Promise((r) => setTimeout(r, 800)); // simulate DB delay

  if (products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <ul style={{ marginTop: "10px" }}>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} — ${p.price}
        </li>
      ))}
    </ul>
  );
}
