export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export const fakeDB: Product[] = [
  { id: 1, name: "Brown T-shirt", category: "men's clothing", price: 20 },
  { id: 2, name: "Blue Denim", category: "men's clothing", price: 40 },
  { id: 3, name: "Red Dress", category: "women's clothing", price: 55 },
  { id: 4, name: "Pearl Necklace", category: "jewelery", price: 120 },
  { id: 5, name: "Silver Ring", category: "jewelery", price: 80 },
  { id: 6, name: "Gaming Laptop", category: "electronics", price: 999 },
];
