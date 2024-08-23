import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='w-full min-h-screen flex items-center justify-around bg-black bg-[url("/image.png")] bg-cover bg-center gap-0'>
        <SignIn />
        <div className='lg:w-[600px] w-0'>
        </div>
    </div>
  )
}