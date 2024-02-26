"use client";
import React from "react";
import { notFound } from "next/navigation";
function getRandomNumber(count){
  return Math.floor(Math.random()*count);
}
const ReviewId = ({params:{productId,reviewId}}) => {
  const random= getRandomNumber(2);
  if(random == 1){
    throw new Error("Unable to fetch review");
  }
  if(parseInt(reviewId)>1000){
    notFound()
  }
  return <div>Review {reviewId} for product {productId}</div>;
};

export default ReviewId;
