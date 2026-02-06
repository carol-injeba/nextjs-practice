export default async function ProductCarousel() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div className="carousel">🚗 Featured Product Carousel 🚗</div>;
}
