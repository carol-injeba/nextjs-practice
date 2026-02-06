export default function UsersModule({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>User's Layout</h1>
      {children}
    </>
  );
}
