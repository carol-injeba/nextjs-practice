"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function UserDetailsPage() {
  const id = useParams().id;

  return (
    <>
      <h1>User Details for {id}</h1>
      <Link href="/users/list">Back to Users List Page</Link>
    </>
  );
}
