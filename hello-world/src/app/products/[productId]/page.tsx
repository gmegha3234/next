import React from 'react'
import { Metadata } from 'next'
import { resolve } from 'path';
import { metadata } from '@/app/layout';

type Props= {
  params:{productId:string}
}

export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{
  const title= await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`iPhone ${params.productId}`);
    },100);
  });
  return {
     title: `Product ${title}`
  }
}

const ProductId = ({params}:Props) => {
  return (
    <div>Details about product {params.productId}</div>
  )
}

export default ProductId;
