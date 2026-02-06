import { fetchAvailability } from "../lib/product-availability";
import AvailabilityClient from "./product-availabilityClient";

export default function AvailabilityPage() {
  // Create (but don't await) the promise here in the Server Component
  const availabilityPromise = fetchAvailability();

  return (
    <main style={{ padding: 20 }}>
      <h1>Availability (Server → Client via Promise)</h1>
      <p>
        This page passes a promise to a Client Component which uses React.use().
      </p>
      <AvailabilityClient availabilityPromise={availabilityPromise} />
    </main>
  );
}
