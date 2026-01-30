import Link from "next/link";

export default function UsersPage() {
  return (
    <div>
      <h1>Users Home Page</h1>
      <Link href="/" prefetch={false}>
        Back to Home
      </Link>
      <Link href="/users/list">List All Users</Link>
    </div>
  );
}
