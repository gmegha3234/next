export default function ProductDetailsLayout({ children }: {children: React.ReactNode }) {
  return (
    <>
      {children}
      <h2>with auth layout</h2>
    </>
  );
}
