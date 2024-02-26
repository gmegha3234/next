import React from 'react'
import Link from 'next/link';
const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}

export default HomePage;