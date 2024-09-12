'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div className="text-3xl text-black-500">
      <h3>Welcome to the AI based ATS friendly CV generator. Just bring your Job Description. Rest we'll handle
      </h3>
    </div>
    <Button onClick={()=>(window.location.href = '/dashboard') }>Dashboard</Button>
    </>
  );
}
