'use client'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
    <Button onClick={()=>(window.location.href = '/') }>Return Landingpage</Button>
    </>
  );
}
