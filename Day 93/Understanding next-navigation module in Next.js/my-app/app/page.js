"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  return (
   <div>
    Hey this is a Our page and blog is {searchParams.get("blog")}. and utm source is {searchParams.get("utm_source")}
   </div>
  );
}
