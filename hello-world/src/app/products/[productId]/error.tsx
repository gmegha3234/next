"use client";
export default function Error({error,reset}){
    return <h1>{error.message} <button onClick={reset}>Try Again</button></h1>
}