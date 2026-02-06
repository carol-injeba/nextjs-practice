"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function UserDetailsPage() {
  const id = useParams().id;

  return (
    <>
      <h2>User Details for {id}</h2>
      <Link href="/users/list">Back to Users List Page</Link>
    </>
  );
}
