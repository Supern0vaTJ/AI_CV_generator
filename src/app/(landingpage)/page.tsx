'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <div className="text-6xl text-green-500">Unprotected for everyone to see
    
    </div>
    <Button onClick={()=>(window.location.href = '/dashboard') }>Dashboard</Button>
    </>
  );
}
