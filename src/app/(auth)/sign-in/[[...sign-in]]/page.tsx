import { SignIn, ClerkLoading, ClerkLoaded } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-full min-h-screen flex items-center justify-around bg-black bg-[url("/image2.png")] bg-cover bg-center gap-0'>
        <SignIn />
    </div>
  )
}