"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";
import React from "react";
const NavLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget_password" },
];

export default function AuthLayout({ children }) {
  const pathName = usePathname(); //return active link
  const [input,setInput]=useState("");
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      {NavLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
