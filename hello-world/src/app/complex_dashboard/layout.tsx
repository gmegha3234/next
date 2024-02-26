export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}) {
  const isLogged = false;
  return isLogged ? (
    <>
      <div>{children}</div>
      <div>{users}</div> <div>{revenue}</div> <div>{notifications}</div>
    </>
  ) : (
    <div>{login}</div>
  );
}
