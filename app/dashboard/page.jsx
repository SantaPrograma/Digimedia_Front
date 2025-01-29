"use client"
import { useRouter } from "next/router";


export default function Page() {

  const router = useRouter();
  router.push("/dashboard/main")

  return (
    <h1 className="mt-4" >home dash</h1>
  );
}