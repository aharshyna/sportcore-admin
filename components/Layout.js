import Nav from '@/components/Nav'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Layout({ children }) {
  const { data: session, status } = useSession()

  // const isLoading = status === 'loading'

  if (!session) {
    return (
      <div className='bg-blue-900 flex items-center w-screen h-screen'>
        <div className='text-center w-full'>
          <button
            onClick={() => signIn('google')}
            className='bg-white p-2 px-4 rounded-lg text-black'
          >
            Login with Google
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-blue-900 min-h-screen flex'>
      <Nav />
      <div className='bg-white flex-grow mt-3 mr-3 mb-3 rounded-lg p-4 text-black'>
        {children}
      </div>
    </div>
  )
}
