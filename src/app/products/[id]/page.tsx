export default async function ProductDiscount({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ discount?: string; user?: string }>;
}) {
  const { id } = await params;
  const search = await searchParams;
  const discount = search?.discount || "default";
  const user = search?.user || "Guest";
  return (
    <div>
      <p>Hello {user}</p>
      <p>Personalized Discount: {discount}% for Product ID: {id}</p>
    </div>
  );
}
