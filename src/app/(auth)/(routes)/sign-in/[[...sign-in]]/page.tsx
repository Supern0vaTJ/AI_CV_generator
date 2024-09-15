import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignIn />
    </div>
  )
}