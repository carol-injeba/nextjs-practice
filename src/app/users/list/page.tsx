import Link from "next/link";

export default async function ListPage() {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const users = ["Alice", "Bob", "John", "Doe"];
  return (
    <>
      <h2>List Page</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link href={`/users/${user}`}>{user}</Link>
          </li>
        ))}
      </ul>
      <Link href="/users">Back to Users Home Page</Link>
    </>
  );
}
