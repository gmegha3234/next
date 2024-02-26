export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  const random = getRandomNumber(2);
  if (random == 1) {
    throw new Error("Unable to fetch review");
  }
  return (<>
  
      {children}
      <h2>Features products</h2>
    </>
  );
}
function getRandomNumber(count) {
  return Math.floor(Math.random() * count);
}