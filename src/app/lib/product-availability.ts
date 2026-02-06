export type Availability = {
  productId: number;
  inStock: boolean;
  qty: number;
};

export async function fetchAvailability(): Promise<Availability[]> {
  // Simulate a slow DB/API call
  await new Promise((r) => setTimeout(r, 1000));

  // Pretend this came from your DB
  return [
    { productId: 1, inStock: true, qty: 12 },
    { productId: 2, inStock: false, qty: 0 },
    { productId: 3, inStock: true, qty: 5 },
  ];
}
