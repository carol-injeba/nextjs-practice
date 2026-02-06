import SelectedProducts from "./SelectedProducts";

export default async function ProductCategories({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await response.json();
  const params = await searchParams;
  const selectedCategory = params.category;
  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {" "}
        {categories.map((category: string) => (
          <li key={category}>
            <a href={`categories?category=${category}`}>{category}</a>
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <>
          <p>Selected Category: {selectedCategory}</p>
          <SelectedProducts selectedCategory={selectedCategory} />
        </>
      )}
    </div>
  );
}
