'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="text-3xl text-black-500">
      <h3>Welcome to the AI based ATS friendly CV generator. Just bring your Job Description. Rest we will handle
      </h3>
    </div>
    <Button onClick={()=>(window.location.href = '/dashboard') }>Dashboard</Button>
    <Link href='/sign-in'>
      <Button>
        Login
      </Button>
    </Link>
    <Link href='/sign-up'>
      <Button>
        Register
      </Button>
    </Link>
    </>
  );
}
