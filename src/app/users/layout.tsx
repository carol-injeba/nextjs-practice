export default function UsersModule({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>User's module</h2>
      {children}
    </>
  );
}
