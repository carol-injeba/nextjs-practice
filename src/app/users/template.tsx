export default function UserTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>User Template</h2>
      {children}
    </>
  );
}
